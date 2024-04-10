const express= require("express");
const router = express.Router();
// Creating a router object and storing in router variable

const v1ApiRoutes= require("./v1/index");

// If the URL of the current routing request begins with /v1
// then we are routing the request to the route object of the v1 file. 
router.use("/v1",v1ApiRoutes);

module.exports=router;
// To use a router object of another file we must export it from that file and in 
// whichever file we want to use it we have to import it in that file.

