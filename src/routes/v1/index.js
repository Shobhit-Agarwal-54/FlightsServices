const express=require("express");
const router = express.Router();

const CityController = require("../../controllers/city-controller");

// :id represents the id number written in the URL of the routed request
// API 1
router.post("/city",CityController.create);
// API 2
router.delete("/city/:id",CityController.destroy);
// API 3
router.get("/city/:id",CityController.get);
// API 4
router.patch("/city/:id",CityController.update);
// API 5
router.get("/city",CityController.getAll);

module.exports=router;