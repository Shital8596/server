const express = require('express')
const router = new express.Router()
const Products = require("../models/products")
const bcrypt = require("bcryptjs")
const User = require("../models/users")
const authenticate = require("../middleware/autheticate")


//get productdata api is created
router.get("/getproducts", async (req,res) => {
    try {
        const productdata = await Products.find()
        res.status(200).send(productdata)
        // console.log(productdata) 
    } catch (error) {
        console.log(error)
    }
})
router.get("/getproductsone/:id",async (req,res)=>{
    try {
        const id = req.params.id
        const individualdata = await Products.findOne({id:id}) 
        res.status(201).send(individualdata)
    } catch (error) {
        res.status(400).send(error)
    }
})

//register userData

router.post("/register", async (req,res) => {
    const {name, email, mobile, password, cpassword} = req.body
    
    if(!name || !email || !mobile || !password || !cpassword){
        res.status(422).json({error:"Fill the all data"})
        console.log("data not available")
    }

    try {
        const preuser = await User.findOne({email:email})

        if(preuser){
            res.status(422).json({error:"this user is already present"})
        }else if(password != cpassword){
            res.status(422).json({error:"password is not matching"})
        }else{
            const finalUser = new User({
                name,email,mobile,password,cpassword
            })

            const storeData = await finalUser.save()
            console.log(storeData)
            res.status(201).json(storeData)
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

//Login user api

router.post("/login", async(req, res)=>{
    const {email, password} = req.body

    if(!email || !password){
        res.status(400).json({error:"Fill the data"})
    }

    try {
        const userlogin = await User.findOne({email:email})
        console.log("user is"+" "+ userlogin)

        if(userlogin){
            const isMatch = await bcrypt.compare(password, userlogin.password)

            // generate token
            const token = await userlogin.generateAuthToken()
            console.log(token)

            // generate cookie
            res.cookie("Ecommerce", token,{
                expires:new Date(Date.now() + 1800000),
                httpOnly:true
            })

            //-----------------------------------

            if(!isMatch){
                res.status(400).json({error: "invalid details"})
            }else{
                res.status(201).json(userlogin)
            }
        }else{
            res.status(400).json({error:"invalid details"})
        }

    } catch (error) {
        res.status(400).send(error)
    }
})

//creating api for addToCart functionality

router.post("/addcart/:id", authenticate, async (req,res) => {
    try {
        const {id} = req.params
        const cart = await Products.findOne({id:id})
        // console.log(cart)

        const userContact = await User.findOne({_id:req.userId})
        // console.log(userContact)

        
        if(userContact){
                const cartData = await userContact.addCartData(cart)
                await userContact.save()
                console.log(cartData)
                res.status(201).json(userContact)
        }else{
            res.status(400).json({error:"invalid user"})
        }
    } catch (error) {
        res.status(400).json({error:"invalid user"})
    }
})

//api to get cart details

router.get("/cartDetails", authenticate, async (req,res)=>{
    try {
        const buyUser = await User.findOne({_id:req.userId})
        console.log(buyUser)
        res.status(201).json(buyUser)
    } catch (error) {
        res.status(400).send("Data not Found")
    }
})

// get valid user

router.get("/validUser", authenticate, async (req,res)=>{
    try {
        const validUserOne = await User.findOne({_id:req.userId})
        console.log(validUserOne)
        res.status(201).json(validUserOne)
    } catch (error) {
        res.status(400).send("Data not Found")
    }
})

// remove item from cart

router.delete("/remove/:id", authenticate, async (req,res)=> {
    try {
        const {id} = req.params
        req.rootUser.carts = req.rootUser.carts.filter((item) =>{
            return item.id != id
        })

        req.rootUser.save()
        res.status(201).json(req.rootUser)
    } catch (error) {
        res.status(400).json(error)
    }
})

// api for logoutuser

router.get("/logout", authenticate, (req,res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curItem) => {
            return curItem.token !== req.token
        })
        res.clearCookie("Ecommerce", {path:"/"})
        req.rootUser.save()
        res.status(201).json(req.rootUser.tokens)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router