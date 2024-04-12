import  express  from "express";
const app = express();
import {userRoute} from "./routes/users.js"
import {commentsRoute} from "./routes/comments.js"
import {authroute} from "./routes/auth.js"
import {likesRoute} from "./routes/likes.js"
import {postRoute} from "./routes/post.js"
import cookieParser from "cookie-parser";
import cors from "cors"


// middle wares

app.use(express.json());
app.use(cors());
app.use(cookieParser())


app.use("/api/users", userRoute);
app.use("/api/auth",authroute);
app.use("/api/comments", commentsRoute);
app.use("/api/post",postRoute);
app.use("/api/likes",likesRoute);

app.listen(8800,() =>{
   console.log("Api working....")
})