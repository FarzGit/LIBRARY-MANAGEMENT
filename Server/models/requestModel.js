import mongoose from 'mongoose';

const RequestSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    bookTitle: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    bookAuthor: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending',
    }
});

const Request = mongoose.model('Requests', RequestSchema);
export default Request;
