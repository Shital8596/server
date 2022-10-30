require("dotenv").config()
const express = require('express')
const cors = require('cors')
require("./db/connect")
const Products = require("./models/products")
const DefaultData = require("./defaultData")
const router = require("./routes/router")
const cookieParser = require("cookie-parser")

const app = express()
const mongoose = require("mongoose")
app.use(cors())
app.use(cookieParser(""))
app.use(express.json())
app.use(router)
const port = process.env.PORT || 8000;

// for deploying site on Heroku
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}

app.get("/", (req,res)=>{
    res.json("server started")
})


app.listen(port, () => {
    console.log(`Listening to the port ${port}`)
})
DefaultData()
