import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import { CREATE_MESSAGE } from 'graphql/mutations'
import { ALL_MSG_QUERY } from 'graphql/queries'
import { graphql } from 'react-apollo'
import styles from './Input.module.styl'

@graphql(CREATE_MESSAGE, {name:'createMsg'})
class InputMsg extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      msg: ''
    }
  }

  onClick = () => {
    console.log(this.state)
    this.props.createMsg({
      variables: {
        name: this.state.name,
        message: this.state.msg
      },
      update: (proxy, { data: {createMessage} }) => {
        // Read the data from our cache for this query.
        const data = proxy.readQuery({ query: ALL_MSG_QUERY })
        console.log('createMsg',createMessage)
        // Add our todo from the mutation to the end.
        data.allMessages.push(createMessage)

        // Write our data back to the cache.
        proxy.writeQuery({ query: ALL_MSG_QUERY, data })
      }
    })
    this.setState({
      msg: ''
    })
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleMsgChange = (e) => {
    this.setState({
      msg: e.target.value
    })
  }

  render () {
    return (
      <div className={styles.box}>
        <div> 
          <Input size='mini' placeholder='Name' onChange={this.handleNameChange} value={this.state.name} /> 
        </div>
        <Input
          size='large' 
          action={<Button color='teal' icon='send' content='Send' onClick={ this.onClick } />} 
          placeholder='Type msg' 
          fluid
          value={this.state.msg}
          onChange={this.handleMsgChange}
        />
      </div>
    )
  }
}

export default InputMsg