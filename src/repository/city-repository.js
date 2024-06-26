// Repository layer will interact with the database
const { City }=require("../models/index");
// index file will return models for different tables like city airplane flights..
// we are destructuring the object to get the required models
// Key is always the model name

const { Op }=require("sequelize");

class CityRepository{
    async createCity({ name })
    {
        try{
            const city=await City.create({ name });
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
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
            return true
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async updateCity(cityId,data)
    {
        // data is the object which has the key as parameter to be updated and value as updated value
        try {
            // const city=await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // });

            const city=await City.findByPk(cityId);
            city.name=data.name;
            // The below line will save the updated city in the database
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async getCity(cityId)
    {
        try {
            const city=await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
// filter object is request param object which can be empty also
// here name is the key to both the models and the request query
    async getAllCities(filter){ 
        try {
            if(filter.name){
                const cities=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                });
                return cities;
            }
            const cities=await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
}
module.exports=CityRepository;

