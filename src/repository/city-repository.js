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
            console.log("Something went wrong");
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
            console.log("Something went wrong");
            throw{error};
        }
    }

    async updateCity(cityId,data)
    {
        // data is the object which has the key as parameter to be updated and value as updated value
        try {
            const city=await City.update(data,{
                where:{
                    id:cityId
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong");
            throw{error};
        }
    }

    async getCity(cityId)
    {
        try {
            const city=await City.findByPK(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong");
            throw{error};
        }
    }
}
module.exports=CityRepository;

