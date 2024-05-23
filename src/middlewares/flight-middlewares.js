// MiddleWares are used to filter out or check if our request body follows the 
// API contracts or we can say if it has all compulsory key-value pairs

// next is used to take program control to the next middleware
const validateCreateFlight=(req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    )
    {
        // if any of the body params is missing we come inside if
        // 400 indicates that it is a bad request
        return res.status(400).json({
            data:{},
            success:false,
            message:"Invalid request body for creating flight",
            err:"Missing mandatory properties to create a flight"
        });
    }
    next();
    // next() will redirect to the next middleware or we can say to the controller
}

module.exports={
    validateCreateFlight
}