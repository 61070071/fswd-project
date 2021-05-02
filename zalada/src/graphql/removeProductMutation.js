import { gql } from '@apollo/client'

export const REMOVE_PROMOTION_SALE = gql`
mutation($productId: MongoID!){
    removePromotionSale(_id:$productId){
      recordId
    }
  }
`

export const REMOVE_PROMOTION_FREE = gql`
mutation($productId: MongoID!){
    removePromotionFree(_id:$productId){
      recordId
    }
  }
`
export const REMOVE_PRODUCT = gql`
mutation($productId: MongoID!){
    removeProductOG(_id:$productId){
      recordId
    }
  }
`