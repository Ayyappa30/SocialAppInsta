import  db  from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = (req,res) => {

   const q = "SELECT * FROM users WHERE username=?"

   db.query(q,[req.body.username],(err,data)=>{
    if(err) return res.status(500).json(err)
    if(data.length) return res.status(409).json("user already exists")

    const salt = bcrypt.genSaltSync(10)
   const hassedPassword = bcrypt.hashSync(req.body.password,salt)

   const insertQuery = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUES (?)"

   const values = [req.body.username,req.body.email,hassedPassword,req.body.name]
   db.query(insertQuery,[values],(err,data)=> {
    if(err) return res.status(500).json(err)
    return res.status(200).json("user has been created")
   })
   })

   
    
}



export const login = (req, res) => {
    const q = "SELECT id, username, password FROM users WHERE username = ?";
    db.query(q, [req.body.username], (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (data.length === 0) {
            return res.status(404).json({ message: "User does not exist. Please sign up." });
        }

        const user = data[0];
        const checkPassword = bcrypt.compareSync(req.body.password, user.password);

        if (!checkPassword) {
            return res.status(400).json({ message: "Incorrect password." });
        }

        const token = jwt.sign({ id: user.id }, "secretkey");

        // Do not include password in the response
        delete user.password;

        // Set cookie with JWT token
        res.cookie("AccessToken", token, {
            httpOnly: true,
        });

        return res.status(200).json({ user, token });
    });
};




export const logout = (req,res) => {
    res.clearCookie("AccessToken",{
        secure:true,
        sameSite: "none"
    })
    return res.status(200).json({message: "user has been logged out"})
}