
import express from 'express'
import {signup,login,logout,checkAuth} from './user.controller.js'
import requireAuth from '../../middleware/requireAuth.js'




const userRouter = express.Router()


userRouter.post('/signup',signup)
userRouter.post('/login',login)
userRouter.get('/logout',logout)
userRouter.get('/checkAuth',requireAuth,checkAuth)



export default userRouter