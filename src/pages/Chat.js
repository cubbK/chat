import React, { Component } from 'react'
import { Header, Icon, Container } from 'semantic-ui-react'
import Messages from './chat/Messages'
import InputMsg from './chat/Input'

class Chat extends Component {
  render() {
    return (
      <Container>
        <Header as='h1'>
          <Icon name='chat' />
          <Header.Content>
            Skack
          <Header.Subheader>
              Chat with everybody
          </Header.Subheader>
          </Header.Content>
        </Header>
        <Messages />
        <InputMsg />
      </Container>
    )
  }
}

export default Chat