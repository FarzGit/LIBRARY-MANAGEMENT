import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './routes/userRouter.js';
dotenv.config()
connectDB()

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/api/users',userRouter)





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { // Here is connectin the server with specific port
    console.log(`Server is running on http://localhost:${PORT}`);
  });