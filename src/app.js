import  Express  from "express";
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

export { app } //some use default some use this, not significance diff