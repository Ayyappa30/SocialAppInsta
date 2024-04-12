import  Express  from "express";
import {getUsers} from "../controllers/users.js"
export const userRoute = Express.Router()

userRoute.get("/test",getUsers)




