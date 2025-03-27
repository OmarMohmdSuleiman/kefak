import mongoose from "mongoose";
import Chat from "../models/chat.model.js";
import User from "../models/user.model.js";


export async function sendMessage(req,res){
    const {chat_id,sender_id, reciever_id, content}=req.body;
    if(!content || !sender_id || !reciever_id||!chat_id){
        return res.status(400).send({
            message:"Missing ..."
        })
    }
    if(!mongoose.Types.ObjectId.isValid(sender_id) || !mongoose.Types.ObjectId.isValid(reciever_id)){
        return res.status(400).send({
            message:"ID is of invalid format..."
        })
    }

    try{
        const chat=await Chat.findById(chat_id);
        
        if(!chat){
            return res.status(400).send({
                message:"No available chat..."
            })
        }

        const sender=await User.findById(sender_id);
        if(!sender){
            res.status(400).send({
                message:"Sender is not found"
            })
        }
        const reciever=await User.findById(reciever_id);
        if(!reciever){
            res.status(400).send({
                message:"Receiver is not found"
            })
        }
        
        const new_message = {
            sender: sender_id,
            reciever: reciever_id,
            message: content
        }
        
        

       chat.messages.push(new_message);
       await chat.save();
        return res.send({
            sender: sender_id,
            sender_name:sender.firstName,
            reciever: reciever_id,
            reciever_name:reciever.firstName,
            message: content
        })

    } catch(error){
        console.log(error.message);
        return res.status(500).send("Internal Server Error");
        }
}

export async function addChat(req,res){
    const {userTwo_email,logged_in_id}=req.body;

    
    

    try {
        const user_two=await User.findOne({email:userTwo_email});
        console.log("User email to search:", userTwo_email);
        if(!user_two){
            return res.status(404).send({
                message:"Email is not found..."
            })
        }
        const existingChat = await Chat.findOne({
            $or: [
                { user_one:logged_in_id, user_two: user_two._id},  
                { user_one: user_two._id,user_two: logged_in_id}
            ]
        });
        if(existingChat){
            return res.status(400).send({
                message:"Chat already exists..."
            })
        }
        await Chat.create({
            user_one:logged_in_id,
            user_two: user_two._id

        })
        return res.send({
            user_one:logged_in_id,
            user_two_id: user_two._id ,
            user_two:user_two.email
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server Error");
        }
    }

    export async function getChats(req,res){
        const {user_id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(user_id) ){
            return res.status(400).send({
                message:"ID is of invalid format..."
            })
        }
        try {
            const chats=await Chat.find({user_one:user_id})
            .populate("user_two", "firstName");
        
            return res.send({
                chats,
                
            })
            
        } catch (error) {
            console.log(error.message);
        return res.status(500).send("Internal Server Error");
        }
    }

    export async function getChat(req,res){
        const {user_id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(user_id) ){
            return res.status(400).send({
                message:"ID is of invalid format..."
            })
        }
        try {
            const chats=await Chat.find({
                user_two:user_id
            })
            .populate('user_one', 'firstName email')  
            .populate('user_two', 'firstName email');

            return res.send({chats});
           
            
        } catch (error) {
            console.log(error.message);
            return res.status(500).send("Internal Server Error");
        }
    }

    function ValidateEmail(email){
        const regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    
    }

