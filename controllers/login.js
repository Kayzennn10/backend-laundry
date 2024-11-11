const { User } = require("../models");
const bcrypt = require("bcrypt");

class Login {
  static async login(req, res, next) {
    try {
      const user = await User.findOne({ 
        where: { 
          email: req.body.email 
        } 
      });

      if (!user) {
        throw { name: "InvalidCredentials", message: "Email tidak terdaftar" };
      }

      const comparePassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      
      if (!comparePassword) {
        throw { name: "InvalidCredentials", message: "Password salah" };
      }

      res.status(200).json({
        email: user.email,
        role: user.role,
      });
      
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Login;