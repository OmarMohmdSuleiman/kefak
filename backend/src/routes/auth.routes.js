import { Router } from "express";
import { hello,bye,addUser,addPerson,register,login } from "../controllers/auth.controller.js";
import {sendMessage,addChat,getChats} from "../controllers/chat.controller.js";


const authRouter=new Router();

authRouter.get("/hello",hello);
authRouter.get("/bye",bye);
authRouter.post("/add-user",addUser);
authRouter.post("/add-person",addPerson);
authRouter.post("/register",register);
authRouter.post("/login",login);
authRouter.post("/sendMessage",sendMessage);
authRouter.post("/addChat",addChat);
authRouter.get("/getChats/:user_id",getChats);



export default authRouter;

