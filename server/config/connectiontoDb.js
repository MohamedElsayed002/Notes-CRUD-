
import mongoose from 'mongoose'

function connectionDB () {

    mongoose.connect(process.env.DB_URL)
        .then(() => {
            console.log("Conectado ao MongoDB")
        }).catch(err => {
            console.log(err)
        }) 
}

export default connectionDB