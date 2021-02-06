const { Router } = require('express');
const { getAllUsers, getMyProfile, addUser, updateUserById, deleteUser, login, logout } = require('./user.controllers');
const { hashPassword, auth } = require('../middleware');
const userRouter = Router();

userRouter.get('/users/myprofile', auth, getMyProfile);
userRouter.post('/users', hashPassword, addUser);
userRouter.get('/users', getAllUsers);
userRouter.patch('/users/:id', auth, hashPassword, updateUserById);
userRouter.delete('/users/:id', auth, deleteUser);
userRouter.post('/users/login', login);
userRouter.get('/users/logout', auth, logout);

module.exports = {
  userRouter,
};