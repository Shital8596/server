const Products = require("./models/products")
const productData = require("./constants/productsData")

const DefaultData = async() => {
    try {
        await Products.deleteMany({})
        const storeData = await Products.insertMany(productData)
        // console.log(storeData)
    } catch (error) {
        console.log(error)
    }
}

module.exports = DefaultData