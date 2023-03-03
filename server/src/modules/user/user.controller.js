
import { UserModel } from '../../../config/models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const signup = ('/signup' , async (req,res) => {
    try {
        const {email,password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        await UserModel.insertMany({email,password : hashedPassword})
        res.sendStatus(200)
    }catch(err) {
        console.log(err)
        res.sendStatus(400)
    }
})

export const login = ('/login' , async (req,res) => {
    try {
        const {email,password} = req.body
    const user = await UserModel.findOne({email})
    if(!user) return res.sendStatus(401)
    const passwordMatch  = bcrypt.compareSync(password,user.password)
    if(!passwordMatch) return res.sendStatus(401)

    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30
    const token = await jwt.sign({sub : user._id , exp} , process.env.SECRET_KEY)

    res.cookie("Authorization" , token , {
        expires : new Date(exp),
        httpOnly: true,
        sameSite : "lax",
        secure : process.env.NODE_ENV === "production"
    })

    res.sendStatus(200)
    }catch (err) {
        console.log(err)   
        res.sendStatus(400);

    }
})

export const logout = ('/logout' , async (req,res) => {
    try {
        res.clearCookie("Authorization" , "" , {expires : new Date()})
        res.sendStatus(200)
        console.log("logout")
    }catch(err) {
        console.log(err)
        return res.sendStatus(400);

    }
})

export const checkAuth = (req,res) => {
    try {
        res.sendStatus(200)
    }catch(err) {
        return res.sendStatus(401)
    }
}