const { City }=require("../models/index");
// index file will return models for different tables like city airplane flights..
// we are destructuring the object to get the required models
// Key is always the model name

class CityRepository{
    async createCity({ name })
    {
        try{
            const city=await City.create({ name });
            return city;
        }
        catch(error){
            throw {error};
        }
    }
    
    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            });
        }
        catch(error){
            throw{error};
        }
    }
}


