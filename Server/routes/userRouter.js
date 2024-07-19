
import express from 'express'
const userRouter = express.Router()
import { authMiddleware } from '../middleware/auth.js'

import {borrowBook, loginUser, register, returnBook} from '../controllers/userControllers.js'


userRouter.post('/register',register) // This is the endpoint for register the new user
userRouter.post('/login',loginUser) // This is the endpoint for Login the existing user
userRouter.post('/request',authMiddleware,borrowBook) // This is the endpoint for borrowing the existing book
userRouter.post('/return',returnBook) // This is the endpoint for return the existing book from user hand
// userRouter.get('/check',authMiddleware,(req,res)=>{
//     res.json({userId:req.user.id})
// }) // This is the endpoint for return the existing book from user hand











export default userRouter