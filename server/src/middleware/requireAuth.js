
import jwt from 'jsonwebtoken';
import { UserModel } from '../../config/models/user.js';


async function requireAuth(req, res, next) {
    try {
        const token = req.cookies.Authorization
        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        if (Date.now() > decoded.exp) return res.sendStatus(401)
    

        const user = await UserModel.findById(decoded.sub)
        if(!user) return res.sendStatus(401)
        req.user = user
        next()  
    }catch(err) {
        return res.sendStatus(401)
    }
}

export default requireAuth;