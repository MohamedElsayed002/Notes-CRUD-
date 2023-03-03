

import {NoteModel} from '../../../config/models/note.js'

export const allUser =('/notes' , async (req,res) => {
    let note = await NoteModel.find()
    res.json({note : note})
})

export const allUserById =('/notes/:id' , async (req,res) => {
    const {id} = req.params
    let note = await NoteModel.findById(id)
    res.json({note : note})
})

export const updateUserById = ('/notes/:id' , async (req,res) => {
    const {id} = req.params
    let note = await NoteModel.findByIdAndUpdate(id, req.body , {new : true})
    res.json({note : note})
})

export const addNotes = ('/notes' , async (req,res) => {
    const {title,body,price} = req.body
    let note = await NoteModel.create({title,body})
    res.json({note : note})
})

export const deleteUser = ('/notes/:id' , async (req,res) => {
    const {id} = req.params
    let note = await NoteModel.findByIdAndRemove(id)
    if (note) {
        res.json({message : "Deleted Successfully"})
    }else {
        res.json({message : "Not Deleted Or Not Found"})
    }
})
