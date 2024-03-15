//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/db.js";


dotenv.config({
    path: './env'
})


connectDB()





/*
import { Express } from "express";
const app = express()

( async () => {
    try{
        mongoose.connect(`${process.env.
        MONGODB_URI}/${DB_NAME}`) //connection string
        app.on("error", (error) => { //just after database connection
            console.log("ERR:" , error); //on("error") is listner, (error) recieving error
            throw error
        }) 

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR:", error); //we can also do console.log, same thing
        throw err // exit bhi kara sakte he
    }
})()
*/