import { ProductTC, PromotionSaleTC, PromotionFreeTC, ProductOGTC } from '../../models'

export const allProducts = ProductTC.getResolver('findMany')

export const products = ProductOGTC.getResolver('findMany')
export const promotionSales = PromotionSaleTC.getResolver('findMany')
export const promotionFrees = PromotionFreeTC.getResolver('findMany')

export const productById = ProductTC.getResolver('findById')