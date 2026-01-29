import express from 'express';
const router = express.Router();
import { getallNotes,getNote,addnewNote,UpdateNote,DeleteNote } from '../Controllers/NotesController.js';

router.get('/',getallNotes);

router.get('/:id',getNote)

router.post('/',addnewNote)

router.put('/:id',UpdateNote)

router.delete('/:id',DeleteNote)


export default router 