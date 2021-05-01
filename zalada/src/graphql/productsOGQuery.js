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
export const PROMOTIONS_SALE_QUERY = gql`
query {
  promotionSales {
    type
    productname
    discount
    catagory
    productdescription
    price
    quantity
    photourl
  }
}
`
export const PROMOTIONS_FREE_QUERY = gql`
query {
  promotionFrees {
    type
    productname
    catagory
    productdescription
    price
    quantity
    photourl
    buy
    free
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


