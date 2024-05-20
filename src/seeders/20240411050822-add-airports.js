'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  // Name of the Model file will be in plural in await queryInterface.bulkInsert
    await queryInterface.bulkInsert("Airports",[
      {
        // queryInterface helps the seeder file to communicate with mysql and hence execute the query
        // bulkInsert helps to insert more than one data
        name:"Kempegowda International Airport",
        cityId:2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
    
      {
        name:"Mysuru Airport",
        cityId:2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Mengaluru International Airport",
        cityId:2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Indira Gandhi International Airport",
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
