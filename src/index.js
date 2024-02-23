const express=require("express");
require('dotenv').config()
const {PORT}=require("./config/ServerConfig");

const setupAndStartServer=async()=>{
    // create the express object
    const app=express();
   
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        // console.log(process.env);
    });
}
setupAndStartServer();