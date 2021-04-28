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
