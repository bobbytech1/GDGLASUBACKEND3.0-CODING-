const express = require('express');
const userRoute = express.Router();
const {getAllUsers, createUser} = require('../controllers/user.controller');

userRoute.get('/', getAllUsers);
userRoute.post('/user', createUser);

module.exports = userRoute;
