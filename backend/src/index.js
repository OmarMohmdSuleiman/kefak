import express from "express";
import connectToDatabase from "./db/connection.js";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";


const app=express();
dotenv.config();
app.use(express.json());

const PORT=process.env.SERVER_PORT;

app.use(authRouter);


app.listen(PORT, ()=>{
    console.log(`listning on ${PORT}`);
    connectToDatabase();
});


