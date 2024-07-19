import jwt from 'jsonwebtoken'



const authMiddleware = (req,res,next)=>{
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization denied' });
    }

    const token = authHeader.replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Token is not valid' });
    }
}


export{
    authMiddleware
}