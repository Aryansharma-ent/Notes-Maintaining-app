import React from 'react'
import { useState, useEffect } from 'react';
import { getNotes, DeleteNote } from '../api/notes.js';
import { Link, useNavigate } from 'react-router-dom';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await getNotes();
        setNotes(res.data);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    }
    fetchNotes();
  }, [])

  const Deletenotes = async (id) => {
    try {
      await DeleteNote(id);
      setNotes((prev) => prev.filter((note) => note._id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  if (loading) return (
    <div className="container">
      <div className="loading">Loading......</div>
    </div>
  );

  return (
    <main className="container">
      <div className="header">
        <h2>My Notes</h2>
        <Link to="/add-note">
          <button className="btn-add">+ New Note</button>
        </Link>
      </div>

      <div className="notes-grid">
        {notes.length === 0 ? (
          <p className="no-notes">No notes yet. Create your first note!</p>
        ) : (
          notes.map((note) => {
            return (
              <div key={note._id} className="note-card">
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <div className="note-footer">
                  <span className="note-date">
                    {note.createdAt ? formatDate(note.createdAt) : 'Jan 29, 2026'}
                  </span>
                  <div className="note-actions">
                    <Link to={`/edit-note/${note._id}`}>
                      <button className="btn-icon" title="Edit">✏️</button>
                    </Link>
                    <button 
                      className="btn-icon" 
                      title="Delete"
                      onClick={() => Deletenotes(note._id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}



export default NotesPage
