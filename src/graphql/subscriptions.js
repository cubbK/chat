import gql from 'graphql-tag'

export const ALL_MSG_SUBSCRIPTION = gql`
 subscription allMsg() {
    allMessages {
      id
      text
      user
      createdAt
    }
  }
`