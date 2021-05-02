import { gql } from '@apollo/client'

export const CREATE_USER_MUTATION = gql`
mutation ($record: CreateOneCustomerInput!) {
  createCustomer (record: $record) {
    recordId
  }
}
`
