import { gql } from '@apollo/client'

export const CREATE_PRODUCT_MUTATION = gql`
mutation ($record: CreateOneCommentInput!) {
  createProduct (record: $record) {
    recordId
  }
}
`
