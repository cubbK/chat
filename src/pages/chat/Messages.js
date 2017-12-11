import React, { Component } from 'react'

import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { ALL_MSG_QUERY } from 'graphql/queries'
// import { ALL_MSG_SUBSCRIPTION } from 'graphql/subscriptions'
import { List, Image } from 'semantic-ui-react'

@graphql(ALL_MSG_QUERY)
class Messages extends Component {
  render() {
    const allMessages = this.props.data.allMessages
    console.log(allMessages)
    return (
      <List>
        {allMessages && allMessages.map(msg =>
          <List.Item style={{paddingBottom: '20px'}} key={msg.id}>
            <Image avatar src='/person.jpg' />
            <List.Content>
              <List.Header>{msg.user}</List.Header>
              <List.Description>{msg.text}</List.Description>
            </List.Content>
          </List.Item>)
        }


      </List>
    )
  }
}

export default Messages