const express = require('express');
const userRoute = express.Router();
const { getAllUsers, createUser, getUser } = require('../controllers/user.controller');

userRoute.get('/', getAllUsers);
userRoute.get('/:id', getUser);

userRoute.post('/', createUser);

module.exports = userRoute;
