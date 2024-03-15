import mongoose from "mongoose"; //using mongoose to connect with database
import { DB_NAME } from "../constants.js"; //also db name here
//yha per error he, per jab aayenge tab dekhenge

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
            console.log(`\n MongoDB connected !! DB HOST: $
            {connectionInstance.connection.host}`);
    }catch(error) {
        console.log("MONGODB connection error", error);
        //last time we used throw error, which will exit the process, but node js provide us access with process, we can use it anywhere, no need to import
        //what is process= ye jo hamari current application chal rhi he, ye ek process pe chal rhi hogi aur ye uska reference he, read it more about this in node
        process.exit(1) //process ko exit kai tarike se exit karwa sakte he, read it more about it

    }
}

export default connectDB