import {connect} from "mongoose";


async function connectToDatabase(){
    try{
        const dbHost=process.env.DB_HOST;
        const dbPort=process.env.DB_PORT;
        const dbUser=process.env.DB_USER;
        const dbPass=process.env.DB_PASS;
        const dbName=process.env.DB_NAME

        
        
        const url=`${dbHost}:${dbPort}/${dbName}`;
        await connect(url);
        console.log("connected succesfully to db");
        
    }
    catch(error){
        console.log(error.message);
        
    }
}

export default connectToDatabase;