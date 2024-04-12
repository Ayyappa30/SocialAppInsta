import  Express  from "express";
import {register,login,logout} from "../controllers/auth.js";


export const authroute = Express.Router();

authroute.post("/register",register)
authroute.post("/login",login)
authroute.post("/logout",logout)



