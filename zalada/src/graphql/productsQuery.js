import { gql } from '@apollo/client'

export const PRODUCTS_QUERY = gql`
query{
    products{
      productname
      _id
      catagory
      productdescription
      price
      quantity
      photourl
    }
  }
`

export const PRODUCT_QUERY_ID = gql`
query($productId: MongoID!){
  productById(_id:$productId){
      productname
      _id
      catagory
      productdescription
      price
      quantity
      photourl
    }
  }
`


