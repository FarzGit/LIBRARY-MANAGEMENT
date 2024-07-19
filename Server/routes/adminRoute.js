import express from 'express'
const adminRouter = express.Router()
import { postBooks,getBooks, updateBooks, deleteBooks, getBookRequests, acceptRequest, adminLogin } from '../controllers/adminControllers.js'


adminRouter.post('/books',postBooks) // This is the endpoint for posting new books data 
adminRouter.get('/books',getBooks) // This is the endpoint for getting the books form database 
adminRouter.put('/books',updateBooks) // This is the endpoint for update or edit the current books that in databse 
adminRouter.delete('/books',deleteBooks) // This is the endpoint for deleting the existing book from database
adminRouter.get('/request',getBookRequests) // This is the endpoint for get the request from user for books
adminRouter.put('/accept-request',acceptRequest) // This is the endpoint for accept the boorow request from admin side
adminRouter.post('/login',adminLogin) // This is the endpoint for login the admin






export default adminRouter