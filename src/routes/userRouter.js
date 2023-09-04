import express from 'express'
import UserController from '../controller/userController.js'
// import checkUserAuth from "../middlewares/authmiddlewares.js";
const userRoute = express.Router()

userRoute.post("/register",UserController.UserRegister)
userRoute.post("/login",UserController.UserLogin)

export default userRoute