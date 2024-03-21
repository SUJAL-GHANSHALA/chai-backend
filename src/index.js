//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/db.js";
import  express  from "express";
const app = express()


dotenv.config({
    path: './env'
})


connectDB() //because we wrote asynchronus function in db.js, it will return a promise whenits complete
.then(() => {
    //jo app.js me likhte the wo yha likhenge
    //ham app.listen ka use karenge , kyunki abhi server start hi nhi hua, kevel mongodb connect hua, hamari application ne mongodb ka use kerte hue listen kerna start nhi kiya tha
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("mongoDB connection failed !!!",err);
})







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