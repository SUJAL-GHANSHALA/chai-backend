import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"; //iss tarike se import tab hi ker sakte he, jab controller.js me default export na ho rha ho

const router = Router() //making route app from Router(), just like making app from express()

router.route("/register").post(registerUser) //jaise hi koi /register route pe aayega, rigisterUser method call ho jaayega  ,yha app.js se aaye,url will be like this http://localost:8000/api/v1/users/register

export default router