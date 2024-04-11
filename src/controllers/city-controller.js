// City-controller will get the request from the frontend and pass it to the backend
// City-controller will send the response received from backend to the frontend
const { CityService }=require("../services/index");
// This particular piece of code main sir ne object name and class name same likha hainn
// I have different names for object and class
const cityService= new CityService();

/**
 * POST request is used to create a city
 * data-> req.body
 */
const create= async(req,res) =>{
    try {
        const city= await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created a city",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a city",
            err:error
        });
    }
}

// DELETE requests delete a city -> (/city/:id) form of delete request
// so we can get a city to be deleted from req.params.id

const destroy=async (req,res)=>{
    try {
        const response=await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully deleted a city",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete the city",
            err:error
        });
    }
}

// Request type -> GET and url should be /city/:id

const get=async (req,res)=>{
    try {
        const response=await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully fetched a city",
            err:{} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get the city",
            err:error
        });
    }
}

// Patch -> /city/:id -> req.body
const update = async (req,res)=>{
    try {
        const response=await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully updated a city",
            err:{} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the city",
            err:error
        });
    }
}

const getAll=async (req,res)=>
{
    try {
     const cities= await cityService.getAllCities(req.query);
     return res.status(200).json({
        data:cities,
        success:true,
        message:"Successfully fetched all cities",
        err:{} 
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch all the cities",
            err:error
        });
    }
}

module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}