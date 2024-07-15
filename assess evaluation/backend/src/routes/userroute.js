import { Router } from "express";
import usermodel from "../config/models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import blackmodel from "../config/models/blacklist.js";
import logger from "../logs/logger.js";
config();
const userroute = Router();
const key = process.env.SECRET_KEY;

//register user
userroute.post("/register", async (req, res) => {
    
    const { username, password } = req.body;
    
    try {
        logger.info("logs from userroute");
        logger.error("error logs from userrroute");
        const existuser = await usermodel.findOne({ username: username });

        if (existuser) {
            return res.status(400).send({ message: "This username is already registered, Try to login" });
        }

        bcrypt.hash(password, 12, async (err, result) => {
            if (err) console.log(err);

            const newuser = await usermodel({ username, password: result });
            await newuser.save();
            return res.status(201).send({ message: "Registred successfully" });
        })
    } catch (error) {
        console.log(error);
    }
})

//login user
userroute.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(206).send({ message: "please fill all required fields" });
        }
        const existuser = await usermodel.findOne({ username: username });
           if(!existuser){
            return res.status(400).send({message:"This username is not registered, Register and then try again"});
           }

        bcrypt.compare(password, existuser.password, async (err) => {
            if (err) {
                console.log(err);
            }
            jwt.sign({username : existuser.username, password : existuser.password, role : existuser.role}, key, { algorithm: 'HS256' }, async (err, result) => {
               if(err){
                console.log(err);
               }

               res.status(201).send({Token:result});
            })
        })
    } catch (error) {
        console.log(error);
    }
})

//logout user
userroute.post("/logout", async (req, res) => {
    const headers= req.headers.authorization;

    try {
        const token= headers.split(" ")[1];

        const addtoken=await blackmodel({token:token});
        await addtoken.save();

        res.status(200).send({message:"logged out successfully"});

    } catch (error) {
        console.log(error);
    }
})

export default userroute;


//  "username":"creator@gmail.com",
//   "password":"123456"