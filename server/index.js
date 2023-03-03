

import express from 'express'
import * as dotenv from 'dotenv'
import connectionDB from './config/connectiontoDb.js'
import notesRouter from './src/modules/notes/notes.router.js'
import userRouter from './src/modules/user/user.router.js'
import cookieParser from 'cookie-parser'


import cors from 'cors'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: true,
    credentials: true
}))

connectionDB()
app.use(notesRouter)
app.use(userRouter)



app.get('/' , (req,res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT , () => {
    console.log("Server is running")
})