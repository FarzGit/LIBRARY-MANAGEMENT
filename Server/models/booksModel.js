import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    copies: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: 'Available',
    },
   
});

const Book = mongoose.model('Book', BookSchema);
export default Book;
