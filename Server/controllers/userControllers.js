import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import Book from '../models/booksModel.js';
import Request from '../models/requestModel.js';



const register = async (req, res) => {// This function is used to register the new user 
    try {
        const { name, email, password } = req.body
        console.log(name,email,password)
        let user = await User.findOne({ email })
        console.log(user)
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        user = new User({
            name,
            email,
            password,
        });
        await user.save();
        let payload = {
            user: {
                id: user.id,
            },
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token,message:'Registration successfull' });
            }
        );
    } catch (error) {
        console.log(error, 'something went wrong on registration')
    }

}



const loginUser = async (req, res) => { // This function is used to login the existing user 
    try {
        const { email, password } = req.body
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials' })
        }
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' })
        }
        const payload = { // Here setting the user in to payload
            user: {
                id: user.id,
            },
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (error) {
        console.log(error)
    }

}


const borrowBook = async (req, res) => { // This function is used to send a request to admin to borrow the book
    try {
        const { id } = req.query;  
        const userId = req.user.id;  
        if(userId){

            let book = await Book.findById(id);
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            if (book.status === 'unavailable') {
                return res.status(400).json({ message: 'Book is not available for borrowing' });
            }
    
            const existingRequest = await Request.findOne({ user: userId, bookId: id });
            if (existingRequest) {
                return res.status(400).json({ message: 'You have already requested to  this book' });
            }
    
            const user = await User.findById(userId);
            const newRequestData  = {
                user: userId,
                bookId: book._id,
                bookTitle: book.title,
                bookAuthor: book.author,
                userEmail: user.email,
            };
            const newRequest = new Request(newRequestData);
            await newRequest.save();
    
            book.copies -= 1;
            await book.save();
            res.json({ message: 'Request sent successfully', book });
        }else{
            res.status(400).json({message:'User not exit please Login '})
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server error' });
    }
}


const returnBook = async(req,res)=>{ // This is the function for return the book from user hand
    try {
        const { id } = req.query;  
        const userId = '6698e11af178e6656e9b5498';
        const request = await Request.findOne({ _id: requestId, user: userId });
        if (!request) {
            return res.status(404).json({ message: 'Borrow request not found' });
        }
        const book = await Book.findById(request.bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        await Request.findByIdAndDelete(id);
        book.copies += 1;
        await book.save();
        res.json({ message: 'Book returned successfully', book });
        
    } catch (error) {
        console.log(error)
        
    }
}




export {
    register,
    loginUser,
    borrowBook,
    returnBook
}