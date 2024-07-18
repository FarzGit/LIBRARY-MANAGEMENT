
import express from 'express'
const userRouter = express.Router()

import { loginUser, register } from '../controllers/userControllers.js'


userRouter.post('/register',register) // This is the endpoint for register the new user
userRouter.post('/login',loginUser)// This is the endpoint for Login the existing user




export default userRouter