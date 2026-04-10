require("dotenv").config()
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET

const fetchUser = async(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using a valid token"});
    }else{
        try{
            const data = jwt.verify(token,secret)
            req.user = data.user;
            next();
        }catch(error){
            res.status(401).send({errors:"Please authenticate using a valid token"});
        }
    }
}

const isAdmin = async(req,res,next)=>{
    if(req.user.role!="admin"){
        return res.status(401).json({success:false,errors:"You are not authorized to access this endpoint"});
    }
    next()
}

module.exports = {fetchUser,isAdmin}