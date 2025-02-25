import User from "../models/user.model.js";

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
    const{firstName,lastName,email,password}= req.body;

    if(!firstName || !email || !password){
        res.send({
            message:"Missing..."
        });
    }

    try{
        const existedUser= await User.findOne({email});
        if(existedUser){
            return res.status(400).send("Email already registered");
        }
    

    const newUser = new User({
        firstName,
        lastName,
        email,
        password 
    });
    
    await newUser.save();

    res.send({
        message:"Registered successfully",
        firstName,
        lastName,
        email,
        password
    })
    }catch(error){
    res.status(500).send("Internal Server Error");
    }

}

