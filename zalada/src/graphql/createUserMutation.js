import { gql } from '@apollo/client'

export const CREATE_USER_MUTATION = gql`
mutation ($record: CreateOneUserInput!) {
  createCustomer (record: $record) {
    recordId
  }
}
`
