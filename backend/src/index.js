import express from "express";
import connectToDatabase from "./db/connection.js";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";
import cors from "cors";


const app=express();
dotenv.config();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],       
}));

const PORT=process.env.SERVER_PORT;

app.use(authRouter);


app.listen(PORT, ()=>{
    console.log(`listning on ${PORT}`);
    connectToDatabase();
});


