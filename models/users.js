const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const validator = require("validator")
const secretKey = process.env.KEY // secretkey should be 32characters

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        maxlength:10
    },
    email:{
        type:String,
        required:true,
        unique:true,
        Validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        } 
    },
    password:{
        type:String,
        required: true,
        minlength:6
    },
    cpassword:{
        type:String,
        required:true,
        minlength:6
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
    carts:Array
})

//hashing password

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next()
})

//token generation

userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id}, secretKey)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token
    } catch (error) {
        console.log(error)
    }
}

// Add to cart instance schema method

userSchema.methods.addCartData = async function(cart){
    try {
        this.carts = this.carts.concat(cart)
        await this.save()
        return this.carts
    } catch (error) {
        
    }
}



const User = new mongoose.model("User", userSchema)

module.exports = User