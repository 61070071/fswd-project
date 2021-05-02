import { ProductTC, PromotionSaleTC, PromotionFreeTC, ProductOGTC } from '../../models'

export const createProduct = ProductTC.getResolver('createOne')
export const createProductOG = ProductOGTC.getResolver('createOne')
export const createPromotionSale = PromotionSaleTC.getResolver('createOne')
export const createPromotionFree = PromotionFreeTC.getResolver('createOne')
export const UpdateproductById = ProductOGTC.getResolver('updateById')