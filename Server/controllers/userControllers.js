import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';




const register = async (req, res) => {// This function is used to register the new user 
    try {
        const { name, email, password } = req.body
        let user = await User.findOne({ email })
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
                res.json({ token });
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




export {
    register,
    loginUser
}