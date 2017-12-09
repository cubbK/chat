import gql from 'graphql-tag'

export const ALL_MSG_QUERY = gql`
{
  allMessages {
    id
    text
    user
    createdAt
  }
}
`