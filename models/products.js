const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:String,
    price:String,
    description:String,
    discount:String,
    tagline:String
})

const Products = new mongoose.model("Products", productSchema)

module.exports = Products