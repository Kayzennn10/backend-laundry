'use strict';
const bcrypt = require('bcrypt');
const user = require("../data/user.json")
const service = require("../data/service.json")
const payment = require("../data/payment.json")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const dataUser = user.map((el) => {
      el.createdAt = el.updatedAt = new Date()
      el.password = bcrypt.hashSync(el.password, bcrypt.genSaltSync(10))
      return el
    })
     await queryInterface.bulkInsert('Users', dataUser, {});

     const dataService = service.map((el) => {
      el.createdAt = el.updatedAt = new Date()
      return el
     })
     await queryInterface.bulkInsert('Services', dataService, {});

     const dataPayment = payment.map((el) => {
      el.createdAt = el.updatedAt = new Date()
      return el
     })
     await queryInterface.bulkInsert('Payments', dataPayment, {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('People', null, {});
     
  }
};
