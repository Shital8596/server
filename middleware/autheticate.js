const jwt = require("jsonwebtoken")

const User = require("../models/users")
const secretKey  = process.env.KEY

const authenticate = async (req, res, next)=>{
    try {
        const token = req.cookies.Ecommerce
        const verifyToken = jwt.verify(token, secretKey)
        console.log(verifyToken)

        const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token})
        console.log(rootUser)

        if(!rootUser){
            throw new Error("User not found")
        }
        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id

        next()
    } catch (error) {
        res.status(401).send("unauthorized:No token provided")
        console.log(error)
    }
}

module.exports = authenticate