
import express from 'express'
const userRouter = express.Router()

import {borrowBook, loginUser, register, returnBook} from '../controllers/userControllers.js'


userRouter.post('/register',register) // This is the endpoint for register the new user
userRouter.post('/login',loginUser) // This is the endpoint for Login the existing user
userRouter.post('/request',borrowBook) // This is the endpoint for borrowing the existing book
userRouter.post('/return',returnBook) // This is the endpoint for return the existing book from user hand











export default userRouter