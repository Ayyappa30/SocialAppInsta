import Express from "express";
import {userlikes} from "../controllers/likes.js";

export const likesRoute = Express.Router();

likesRoute.get("/likes",userlikes);



