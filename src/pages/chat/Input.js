import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import { CREATE_MESSAGE } from 'graphql/mutations'
import { graphql } from 'react-apollo'

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
      }
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
      <div>
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