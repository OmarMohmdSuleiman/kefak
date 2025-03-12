import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const JWT_SECRET=process.env.JWT_SECRET


export function hello(req,res){
    res.send("It works");
}

export function bye(req,res){
    res.send("see u");
}

export function addUser(req,res){
    const {name,password}=req.body;

    res.send({
        message:"Received",
        name,
        password
})
}

export function addPerson(req,res){
    const {fname,lname,email,password,confirmPassword}=req.body;
    res.send({
        message:"Added succcesfully",
        fname,
        lname,
        email,
        password,
        confirmPassword
    })
}

export async function register(req,res){
    const{firstName,lastName,email,password,confirmPassword}= req.body;


    if(!firstName || !email || !password || !confirmPassword){
        return res.send({
            message:"Missing..."
        });
    }

    if (password !== confirmPassword) {
        return res.status(400).send({
            message: "Passwords do not match"
        });
    }

    try{
        const existedUser= await User.findOne({email});
        if(existedUser){
            return res.status(400).send("Email already registered");
        }
    
    const salt=10;
    const hashedPass= await bcrypt.hash(password, salt);

    const newUser = new User({
        firstName,
        lastName,
        email,
        password:hashedPass
    });
    
    await newUser.save();

    res.status(201).send({
        message:"Registered successfully",
        firstName,
        lastName,
        email,
        password:hashedPass
    })
    }catch(error){
    console.log(error.message);
    return res.status(500).send("Internal Server Error");
    }

}


export async function login(req,res){
    const {email,password,}=req.body;

    if(!email || !password){
        return res.send({
            message:"Missing credential..."
        })
    }

    try{
        const user =await User.findOne({email});
        if(!user){
            return res.status(400).send("Not found...");
        }
        const validPass=await bcrypt.compare(password,user.password);
        if(!validPass){
            return res.status(400).send("Incorrect credential...");
        }
        const token=jwt.sign(
            {id:user._id,email:user.email,fname:user.firstName},
            JWT_SECRET
        );

        return res.send({
            message:"Successfully Logged in...",
            fname:user.firstName,
            password:user.password,
            token
        })
    }catch(error){
        console.log(error.message);
        return res.status(500).send("Internal Server Error");
    }

}
