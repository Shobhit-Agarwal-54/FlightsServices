const express=require("express");
// require('dotenv').config()
// The above lines makes the dotenv package load our environment variables from .dotenv file into process.env object
// process is a node object.

const bodyParser=require("body-parser");

const {PORT}=require("./config/ServerConfig");

const setupAndStartServer=async()=>{
    // create the express object
    const app=express();
   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}`);
    });
}
setupAndStartServer();