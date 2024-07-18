
import Book from '../models/booksModel.js';
import Request from '../models/requestModel.js';

const postBooks = async (req, res) => { // This is the function for posting new book data


    try {
        const { title, author, copies } = req.body;
        const newBook = new Book({
            title,
            author,
            copies
        });
        const book = await newBook.save();
        res.json(book);
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
        const {id} = req.query
        const bookFields = {};
        if (title) bookFields.title = title;
        if (author) bookFields.author = author;
        if (copies) bookFields.copies = copies;

        let book = await Book.findById(id);
        if (!book){
            return res.status(404).json({ message: 'Book not found' });
            
        } 
        book = await Book.findByIdAndUpdate(
            id,
            { $set: bookFields }
        );
        res.json(book);
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'something went wrong when updating the book'});
    }
}



const deleteBooks = async(req,res)=>{// This is the function that is used for deleting the existing book from database
    try {
        const {id} = req.query
        let book = await Book.findById(id);
        if(!book){
            return res.status(404).json({ message: 'Book not found' });
        }
        const isDeleted = await Book.findByIdAndDelete(id);
        if(isDeleted){
            res.json({ message: 'Book Deleted Succesfully' });
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'something went wrong server'})
        
    }
}



const getBookRequests = async(req,res)=>{ // This is the function for getting all the request that come from user to admin
    try{
        const requests = await Request.find()
        if(requests){
            res.json(requests)
        }
    }catch(error){
        console.log(error)
    }
}




const acceptRequest = async(req,res)=>{ // This function is used for accept the incomming reqest from user
    try{

        const {id} = req.query

        const updatedRequest = await Request.findByIdAndUpdate(
            id,
            { status: 'accepted' },
            { runValidators: true }
        );

        if (!updatedRequest) {
            return res.status(404).json({ message: 'Request not found' });
        }

        res.json({ message: 'Request accepted successfully' });

    }catch(error){
        console.log(error);
        res.status(500).json({ message: 'something went wrong server' });
    }
}



export {
    postBooks,
    getBooks,
    updateBooks,
    deleteBooks,
    getBookRequests,
    acceptRequest
}