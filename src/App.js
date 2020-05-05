import React, { Component } from 'react'
import './App.css'

import Formulaire from './Components/Formulaire'
import Message from './Components/Message'


class App extends Component {
/***********************
 ********STATE********
 **********************/
state = {
  messages: {}, //Liste de message
  pseudo: this.props.match.params.pseudo
}

addMessage = message => {
  const messages = {...this.state.messages}
  messages[`message-${Date.now()}`] = message
  this.setState({messages})
}

/***********************
 * *******RENDER********
 **********************/
  render () {
    /*
    Variable message qui va nous permette 
    d'afficher les messages stockées dans le state
    */
   const messages = Object
           .keys(this.state.messages)
           .map(key =>(
             <Message
             key={key}
             message={this.state.messages[key].message}
             pseudo={this.state.messages[key].pseudo} />
           ))

    return (
      <div className='box'>
        <div>
        <div className='messages'>
          <div className="message">
            {messages}
          </div>
       </div>
    </div>

       <Formulaire
          length={150}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App
