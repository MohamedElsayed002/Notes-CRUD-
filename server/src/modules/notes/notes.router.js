

import express from 'express'
import {allUser,allUserById,updateUserById,addNotes,deleteUser} from './notes.controller.js'
const notesRouter = express.Router()


notesRouter.get('/notes', allUser)
notesRouter.get('/notes/:id', allUserById)
notesRouter.put('/notes/:id', updateUserById)
notesRouter.post('/notes', addNotes)
notesRouter.delete('/notes/:id', deleteUser)


export default notesRouter


