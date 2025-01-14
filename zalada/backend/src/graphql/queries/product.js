import { ProductTC, PromotionSaleTC, PromotionFreeTC, ProductOGTC } from '../../models'

export const allProducts = ProductTC.getResolver('findMany')

export const products = ProductOGTC.getResolver('findMany')
export const promotionSales = PromotionSaleTC.getResolver('findMany')
export const promotionFrees = PromotionFreeTC.getResolver('findMany')

export const promotionSaleById = PromotionSaleTC.getResolver('findById')
export const promotionFreeById = PromotionFreeTC.getResolver('findById')

export const productById = ProductTC.getResolver('findById')
export const UpdateproductById = ProductOGTC.getResolver('updateById')

export const promotion = ProductOGTC.getResolver('updateById')
