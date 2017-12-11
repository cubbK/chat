import gql from 'graphql-tag' 

export const CREATE_MESSAGE = gql`
  mutation createMessage ($name: String!, $message: String!) {
    createMessage (
      user: $name
      text: $message
    ) {
      id
      text
      user
      createdAt
    }
  }
`