import  express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser"; //ye dono cors aur coolieparser, app banane ke baad configure kiye jaate he

const app = express(); //all the properties will transfered to const app with this method

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true
})) //use basically, middleware ya configure kerne ke kaam aata he

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit:
"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import, routes aise hi import kiye jaate he, middleware ke baad, and most of the time app.js me kiye jaate na ki index.js me

import userRouter from './routes/user.routes.js' //ye userRouter naam(manchaha naam) tab hi de sakte he, jab user.routes.js se export default ho rha ho


//pahle ham app.get likh rahe the to cheeze sahi thi, kyunki app ke through yhi per ham routes  likh rhe the and controllers likh rahe the, per now ab routes ko import ker rhe he,router ko ham alag le gye he 
//to route ko laane ke liye hame middleware laana padega, yhi syntax, so app.get ki jagah app.use likhenge
//routes declaration
// app.use("/users", userRouter) //aise likhte, it's legel per industry grade me hame api bhi batana hota he, with version
app.use("/api/v1/users", userRouter) //api ke versiion 1,iske baad ham user.routes.js folder me jump karenge

//http://localost:8000/api/v1/users/register  ,url will be like this


export { app } //some use default some use this, not significance diff