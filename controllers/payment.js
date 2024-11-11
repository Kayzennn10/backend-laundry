const { Payment } = require("../models");

class PaymentController {
  static async getPayment(req, res, next) {
    try {
      const payment = await Payment.findAll();
      return res.status(200).json(payment);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getPaymentById(req, res, next) {
    try {
      const id = req.params.id;
      const payment = await Payment.findOne({ where: { id } });
      return res.status(200).json(payment);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async createPayment(req, res, next) {
    try {
      const { serviceId, clientId, employeeId, size, totalPrice} = req.body;
      const payment = await Payment.create({ serviceId, clientId, employeeId, size, totalPrice});
      return res.status(201).json(payment);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async editPayment(req, res, next) {
    try {
      const id = req.params.id;
      const payment = await Payment.update(req.body, { where: { id } });
      return res.status(200).json(payment);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async deletePayment(req, res, next) {
    try {
      const id = req.params.id;
      const payment = await Payment.destroy({ where: { id } });
      return res.status(200).json(payment);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = PaymentController