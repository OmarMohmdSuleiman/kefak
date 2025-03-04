import { Router } from "express";
import { hello,bye,addUser,addPerson,register,login } from "../controllers/auth.controller.js";


const authRouter=new Router();

authRouter.get("/hello",hello);
authRouter.get("/bye",bye);
authRouter.post("/add-user",addUser);
authRouter.post("/add-person",addPerson);
authRouter.post("/register",register);
authRouter.post("/login",login);


export default authRouter;

