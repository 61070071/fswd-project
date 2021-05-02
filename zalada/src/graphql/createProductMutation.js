import { gql } from '@apollo/client'

export const CREATE_PRODUCT_MUTATION = gql`
mutation ($record: CreateOneCommentInput!) {
  createProduct (record: $record) {
    recordId
  }
}
`

//ใช้ตัวนี้
export const CREATE_PRODUCTOG_MUTATION = gql`
mutation ($record: CreateOneProductOGInput!) {
  createProductOG (record: $record) {
    recordId
  }
}
`

//สร้างโปรแบบsale
export const CREATE_PRODUCT_SALE_MUTATION = gql`
mutation ($record: CreateOnePromotionSaleInput!) {
  createPromotionSale (record: $record) {
    recordId
  }
}
`
//สร้างโปรแบบแถม
export const CREATE_PRODUCT_FREE_MUTATION = gql`
mutation ($record: CreateOnePromotionFreeInput!) {
  createPromotionFree (record: $record) {
    recordId
  }
}
`