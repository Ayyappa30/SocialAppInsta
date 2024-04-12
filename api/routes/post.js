import  Express  from "express";
import {userPost} from "../controllers/post.js";

export const postRoute = Express.Router();

postRoute.get("/post",userPost)







  