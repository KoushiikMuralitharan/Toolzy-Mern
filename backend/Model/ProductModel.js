const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productname:String,
    description:String,
    price:Number,
    brandrating:Number,
    imageurl:String
})
const  ProductModel = mongoose.model("products",ProductSchema)
module.exports = ProductModel