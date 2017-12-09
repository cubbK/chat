import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

class InputMsg extends Component {

  onClick = () => {
    console.log('clicked')
  }

  render () {
    return (
      <div>
        <div> 
          <Input size='mini' placeholder='Name' /> 
        </div>
        <Input size='large' action={<Button color='teal' icon='send' content='Send' onClick={ this.onClick } />} placeholder='Type msg' fluid/>
      </div>
    )
  }
}

export default InputMsg