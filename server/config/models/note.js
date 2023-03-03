

import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title : String,
    body : String
})

export const NoteModel = mongoose.model("Note",noteSchema)