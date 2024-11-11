const { Service } = require("../models");

class ServiceController {
  static async getService(req, res, next) {
    try {
      const service = await Service.findAll();
      return res.status(200).json(service);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getServiceById(req, res, next) {
    try {
      const id = req.params.id;
      const service = await Service.findOne({ where: { id } });
      return res.status(200).json(service);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async createService(req, res, next) {
    try {
      const { name, price } = req.body;
      const service = await Service.create({ name, price, description });
      return res.status(201).json(service);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async editService(req, res, next) {
    try {
      const id = req.params.id;
      const service = await Service.update(req.body, { where: { id } });
      return res.status(200).json(service);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async deleteService(req, res, next) {
    try {
      const id = req.params.id;
      const service = await Service.destroy({ where: { id } });
      return res.status(200).json(service);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = ServiceController