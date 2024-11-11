const { User } = require("../models");

class UserController {
  static async getUser(req, res, next) {
    try {
      const user = await User.findAll();
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const id = req.params.id;
      const user = await User.findOne({ where: { id } });
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async createUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.create({ email, password, role: "customer" });
      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async editUser(req, res, next) {
    try {
      const id = req.params.id;
      const { email, password } = req.body;
      const user = await User.update({ email, password }, { where: { id } });
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const id = req.params.id;
      const user = await User.destroy({ where: { id } });
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = UserController