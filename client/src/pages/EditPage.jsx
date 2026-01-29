import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNote, UpdateNote } from "../api/notes";
import { MdEditNote } from "react-icons/md";


export default function EditNotePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchNote() {
      try {
        const res = await getNote(id);
        setTitle(res.data.title);
        setContent(res.data.content);
        setTags(res.data.tags.join(", "));
      } catch (error) {
        console.log(error);
        alert("Failed to load note");
      } finally {
        setLoading(false);
      }
    }
    fetchNote();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await UpdateNote(id, {
        title,
        content,
        tags: tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Failed to update note. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading......</div>
      </div>
    );
  }

  return (
    <main className="container">
      <div className="form-container">
        <h2 className="form-title"><MdEditNote/>Edit Note</h2>

        <form onSubmit={handleSubmit} className="note-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              rows="8"
              placeholder="Write your note content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              id="tags"
              placeholder="Enter tags separated by commas (e.g., work, personal, ideas)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="form-input"
            />
            <small className="form-hint">Separate tags with commas</small>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit" disabled={submitting}>
              {submitting ? "Updating..." : "Update Note"}
            </button>
            <button
              type="button"
              className="btn-cancel"
              onClick={() => navigate("/")}
            >
                 Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}