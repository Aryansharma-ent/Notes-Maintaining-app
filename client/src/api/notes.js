import { api } from "./client";

export const getNotes = () => api.get("/api/notes"); 
export const getNote = (id) => api.get(`/api/notes/${id}`); 
export const AddNote = (data) => api.post("/api/notes",data);
export const UpdateNote = (id,data) => api.put(`/api/notes/${id}`,data);
export const DeleteNote = (id) => api.delete(`/api/notes/${id}`);