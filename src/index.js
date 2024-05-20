const express=require("express");
// require('dotenv').config()
// The above lines makes the dotenv package load our environment variables from .dotenv file into process.env object
// process is a node object.

const bodyParser=require("body-parser");

const db=require("./models/index");

const {PORT}=require("./config/ServerConfig");

const ApiRoutes=require("./routes/index");

const setupAndStartServer=async()=>{
    // create the express object
    const app=express();
   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use("/api",ApiRoutes);

    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);
        // We are synchronizing all models and their tables only when environment 
        // variable SYNC_DB is defined
        // Synchronization needs to be done once after the models and their associations
        // are created
        if(process.env.SYNC_DB)
            {
                db.sequelize.sync({alter:true});
            }
    });
}
setupAndStartServer();