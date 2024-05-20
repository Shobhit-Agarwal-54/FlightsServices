'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      address: {
        type: Sequelize.STRING
      },
      cityId: {
        type: Sequelize.INTEGER,
        // The below things are just for convention purposes but are important
        onDelete:"CASCADE",
        references:{
          model:"Cities",
          key:"id",
          as:"cityId"
          // On the above 3 lines first ensure that the name of the model is in plural because this is
          // a migration file further Cities Model ka id key is getting compared with cityId key of Airports model
          // Sequence of 3 keys is just a syntax.
        },
        allowNull:false 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airports');
  }
};