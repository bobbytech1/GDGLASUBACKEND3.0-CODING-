const express = require('express');
const userRoute = express.Router();
const { getAllUsers, createUser, getUser } = require('../controllers/user.controller');
const checkAgeLimit = require('../middleware/validateUser');

userRoute.get('/', getAllUsers);
userRoute.get('/:id', getUser);

userRoute.post('/', checkAgeLimit, createUser);

module.exports = userRoute;
