
import Book from '../models/booksModel.js';
import Request from '../models/requestModel.js';
import Admin from '../models/adminModel.js';
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'


const postBooks = async (req, res) => { // This is the function for posting new book data


    try {
        const { title, author, copies } = req.body;
        console.log(title, author, copies);
        const newBook = new Book({
            title,
            author,
            copies
        });

        const existingBook = await Book.findOne({ title });
        if (existingBook) {
            return res.status(400).json({ message: 'This Book already exists' });
        }



        const book = await newBook.save();
        res.status(201).json({ book, message: 'Successfully New Book Added' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'server error' });

    }
}


const getBooks = async (req, res) => {// This is the fuction is used for getting the book data from database
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.log(error, 'getting the book data from databse')
    }
}


const updateBooks = async (req, res) => { // This function for updating the books
    try {
        const { title, author, copies } = req.body;
        const { id } = req.query
        const bookFields = {};
        if (title) bookFields.title = title;
        if (author) bookFields.author = author;
        if (copies) bookFields.copies = copies;

        let book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });

        }
        book = await Book.findByIdAndUpdate(
            id,
            { $set: bookFields }
        );
        res.json(book);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'something went wrong when updating the book' });
    }
}



const deleteBooks = async (req, res) => {// This is the function that is used for deleting the existing book from database
    try {
        const { id } = req.query
        let book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        const isDeleted = await Book.findByIdAndDelete(id);
        if (isDeleted) {
            res.status(201).json({ message: 'Book Deleted Succesfully' });
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'something went wrong server' })

    }
}



const getBookRequests = async (req, res) => { // This is the function for getting all the request that come from user to admin
    try {
        const requests = await Request.find()
        if (requests) {
            res.json(requests)
        }
    } catch (error) {
        console.log(error)
    }
}




const acceptRequest = async (req, res) => { // This function is used for accept the incomming reqest from user
    try {
        const { id } = req.query
        const alreadyAccepted = await Request.findById(id)
        if (alreadyAccepted.status === 'accepted') {
            return res.status(400).json({ message: 'Already accepted this Book' });
        }
        const updatedRequest = await Request.findByIdAndUpdate(
            id,
            { status: 'accepted' },
            { runValidators: true }
        );
        if (updatedRequest) {
            res.json({ message: 'Request accepted successfully' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something went wrong server' });
    }
}


const rejectRequest = async (req, res) => { // This function is used for rejecting the incoming request from user
    try {
        const { id } = req.query;
        const request = await Request.findById(id);
        if (request.status === 'rejected') {
            return res.status(400).json({ message: 'Request already rejected' });
        }
        const updatedRequest = await Request.findByIdAndUpdate(
            id,
            { status: 'rejected' },
            { runValidators: true }
        );
        if (updatedRequest) {
            res.json({ message: 'Request rejected successfully' });
        }
        await Request.deleteOne({ _id: id })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong on the server' });
    }
}




const adminLogin = async (req, res) => { // This function is login admin with credentials 

    try {
        const { email, password } = req.body
        let admin = await Admin.findOne({ email })
        if (!admin) {
            return res.status(400).json({ message: 'Invalid Credentials' })
        }
        const isMatch = await admin.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' })
        }
        const payload = { // Here setting the user in to payload
            admin: {
                id: admin.id,
            },
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '5h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token, message: 'Login Successfully' });
            }
        );
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong' });
    }
}


const getUsers = async (req, res) => { // This is the function for getting users list in the DB
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}



export {
    postBooks,
    getBooks,
    updateBooks,
    deleteBooks,
    getBookRequests,
    acceptRequest,
    rejectRequest,
    adminLogin,
    getUsers
}