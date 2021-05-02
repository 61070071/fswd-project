import mongoose from 'mongoose'
import { composeWithMongoose} from 'graphql-compose-mongoose'

const { Schema } = mongoose

const OrderSchema = new Schema({
    // type: {
    //     type: String,
    //     enum: Object.keys(enumProductType),
    //     index: true,
    //     // default : 'Product',
    //     // required: true
    // },
    productname: {
        type: String,
        required: true,
    }
})



export const OrderModel = mongoose.model('Order', OrderSchema)

export const OrderTC = composeWithMongoose(OrderModel)

export default ProductModel