const express = require('express');
const UserController = require('../controllers/user');
const ServiceController = require('../controllers/service');
const PaymentController = require('../controllers/payment');
const Login = require('../controllers/login');
const router = express.Router()

router.post('/login', Login.login)

router.get('/user', UserController.getUser)
router.post('/user', UserController.createUser)
router.get('/user/:id', UserController.getUserById)
router.put('/user/:id', UserController.editUser)
router.delete('/users/:id', UserController.deleteUser)

router.get('/service', ServiceController.getService)
router.post('/service', ServiceController.createService)
router.get('/service/:id', ServiceController.getServiceById)
router.put('/service/:id', ServiceController.editService)
router.delete('/service/:id', ServiceController.deleteService)

router.get('/payment', PaymentController.getPayment)
router.post('/payment', PaymentController.createPayment)
router.get('/payment/:id', PaymentController.getPaymentById)
router.put('/payment/:id', PaymentController.editPayment)
router.delete('/payment/:id', PaymentController.deletePayment)

module.exports = router;