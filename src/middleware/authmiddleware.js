import jwt from "jsonwebtoken"
import UserRegistarion from "../models/Register.js";


const checkUserAuth = async(req,res,next)=>{
let token;
const { authorization } = req.headers;

if (authorization && authorization.startsWith('Bearer ')){
    try {
        token = authorization.split(' ')[1];
        const JWT_SECRET_KEY ="kjkjskdjkjkahhiousda"
        const { userID } = jwt.verify(token, JWT_SECRET_KEY);
        req.user = await UserRegistarion.findById(userID).select("-password");  
        next();      
    } catch (error) {
        res.status(401).json({ "status": "failed", "message": "Unauthorized User" });
    }
} else {
    res.status(401).json({ "status": "failed", "message": "Unauthorized User, No Token" });
}
}
export default checkUserAuth;