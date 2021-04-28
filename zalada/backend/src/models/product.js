import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose

const ProductSchema = new Schema({
    productname: {
        type: String,
        required: true,
    },
    catagory: {
        type: String,
        required: true,
    },
    productdescription: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    photourl: [{
        type: String,
        required: true,
    }],
})

export const ProductModel = mongoose.model('Product', ProductSchema)

export const ProductTC = composeWithMongoose(ProductModel)

export default ProductModel