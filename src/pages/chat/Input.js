import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

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
        <Input size='large' action='Send' placeholder='Type msg' fluid onClick={this.onClick}/>
      </div>
    )
  }
}

export default InputMsg