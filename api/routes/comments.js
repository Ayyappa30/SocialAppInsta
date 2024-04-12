import  Express  from "express";
import {userComments} from "../controllers/comments.js"

export const commentsRoute = Express.Router();

commentsRoute.get("/comments", userComments)