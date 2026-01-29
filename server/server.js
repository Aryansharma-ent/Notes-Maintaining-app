import express, { urlencoded } from "express";
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
const app = express();
import Notes from './Routes/NotesRoutes.js'
import ErrorHandler from "./Middlewares/ErrorHandler.js";
import connectDB from "./config/db.js";
connectDB()

app.use(cors());
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use('/api/notes',Notes);
app.use(ErrorHandler)
app.listen(8000,()=>{
    console.log("Server started at ..... 8000");
})