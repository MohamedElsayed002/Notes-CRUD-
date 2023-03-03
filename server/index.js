

import express from 'express'
import * as dotenv from 'dotenv'
import connectionDB from './config/connectiontoDb.js'
import { NoteModel } from './config/models/note.js'
import cors from 'cors'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())


connectionDB()


app.get('/' , (req,res) => {
    res.send('Hello World!')
})

app.get('/notes' , async (req,res) => {
    let note = await NoteModel.find()
    res.json({note : note})
})

app.get('/notes/:id' , async (req,res) => {
    const {id} = req.params
    let note = await NoteModel.findById(id)
    res.json({note : note})
})

app.put('/notes/:id' , async (req,res) => {
    const {id} = req.params
    let note = await NoteModel.findByIdAndUpdate(id, req.body , {new : true})
    res.json({note : note})
})

app.post('/notes' , async (req,res) => {
    const {title,body} = req.body
    let note = await NoteModel.create({title,body})
    res.json({note : note})
})

app.delete('/notes/:id' , async (req,res) => {
    const {id} = req.params
    let note = await NoteModel.findByIdAndRemove(id)
    if (note) {
        res.json({message : "Deleted Successfully"})
    }else {
        res.json({message : "Not Deleted Or Not Found"})
    }
})




app.listen(process.env.PORT , () => {
    console.log("Server is running")
})