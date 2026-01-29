import Note from "../Models/NotesModel.js";
import asyncHandler from 'express-async-handler'
export const getallNotes =  asyncHandler(async (req,res,next) =>{
   const notes = await Note.find();
   res.json(notes);
});


export const getNote = asyncHandler(async (req,res) => {
    const note = await Note.findById(req.params.id);

    if(!note){
        res.status(400)
            throw new Error("Note doesn't exist")
    }

    res.status(200).json(note);
})

export const addnewNote =  asyncHandler(async (req,res) => {
    const {title,content,tags} = req.body

    if(!title || !content || !tags){
      res.status(400)
            throw new Error("Please enter credentials")
    }

    const newNote = await Note.create({ 
        title : req.body.title,
        content : req.body.content,
        tags : req.body.tags
    });
  
    res.status(201).json(newNote)
})


    export const UpdateNote =  asyncHandler(async (req,res) =>{
        const note = await Note.findById(req.params.id);

        if(!note){
               res.status(400)
            throw new Error("Note doesnt exist")
        }
    
            const UpdatedNote = await Note.findByIdAndUpdate(req.params.id,{
                title : req.body.title,
                content : req.body.content,
                tags : req.body.tags},
                {
                new : true
            });
            
            res.status(201).json(UpdatedNote)
        
    })


    export const DeleteNote = asyncHandler(async (req,res) =>{
        const note = await Note.findById(req.params.id);

        if(!note){
               res.status(400)
            throw new Error("Note doesnt exist")
        }
    
       await Note.findByIdAndDelete(req.params.id);
            
            res.status(201).json(note)
        
    })