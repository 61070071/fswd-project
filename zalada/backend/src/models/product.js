import mongoose from 'mongoose'
import { composeWithMongoose, composeWithMongooseDiscriminators } from 'graphql-compose-mongoose'

const { Schema } = mongoose
const DKey = 'type'
const enumProductType = {
    PRODUCT: 'ProductOG',
    PROSALE: 'PromotionSale',
    PROFREE: 'PromotionFree',
}
const ProductSchema = new Schema({
    type: {
        type: String,
        enum: Object.keys(enumProductType),
        index: true,
        // default : 'Product',
        // required: true
    },
    isActive: {
        type: Boolean,
        default: true,
    },
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
        default: "https://www.12tees.com/assets/img/product_material/jacket/AW-JACKET-1.png"
    }],
})
const ProductOGSchema = new Schema({
    // discount: {
    //     type: Number,
    //     required: true,
    // },
    // proStart: {
    //     type: Date,
    //     required: true,
    // },
    // proEnd: {
    //     type: Date,
    //     required: true,
    // },
})

const PromotionSaleSchema = new Schema({
    discount: {
        type: Number,
        required: true,
    },
    // proStart: {
    //     type: Date,
    //     required: true,
    // },
    // proEnd: {
    //     type: Date,
    //     required: true,
    // },
})

const PromotionFreeSchema = new Schema({
    buy: {
        type: Number,
        required: true,
    },
    free: {
        type: Number,
        required: true,
    },
    // proStart: {
    //     type: Date,
    //     required: true,
    // },
    // proEnd: {
    //     type: Date,
    //     required: true,
    // },
})

ProductSchema.set('discriminatorKey', DKey)

// export const ProductModel = mongoose.model(enumProductType.PRODUCT, ProductSchema)
export const ProductModel = mongoose.model('Product', ProductSchema)
export const ProductOGModel = ProductModel.discriminator(enumProductType.PRODUCT, ProductOGSchema)
export const PromotionSaleModel = ProductModel.discriminator(enumProductType.PROSALE, PromotionSaleSchema)
export const PromotionFreeModel = ProductModel.discriminator(enumProductType.PROFREE, PromotionFreeSchema)


// export const ProductTC = composeWithMongoose(ProductModel)
export const ProductTC = composeWithMongooseDiscriminators(ProductModel)

// export const ProductTC = composeWithMongooseDiscriminators(ProductModel, { name: enumProductType.PRODUCT })
export const ProductOGTC = ProductTC.discriminator(ProductOGModel, { name: enumProductType.PRODUCT })
export const PromotionSaleTC = ProductTC.discriminator(PromotionSaleModel, { name: enumProductType.PROSALE })
export const PromotionFreeTC = ProductTC.discriminator(PromotionFreeModel, { name: enumProductType.PROFREE })
export default ProductModel