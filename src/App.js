import React, { Component, createRef } from 'react'
import './App.css'

import Formulaire from './Components/Formulaire'
import Message from './Components/Message'

//Firebase
import base from './base'
class App extends Component {


/***********************
 ********STATE********
 **********************/
state = {
  messages: {}, //Liste de message
  pseudo: this.props.match.params.pseudo
}

/**
 * Reference du message pour stocker
 * dans la div du message
 * Appel a createRef
 */
messagesRef = createRef()

/**
 * Gestion et connexion à Firebase
 */
componentDidMount() {
  base.syncState('/', {
    context: this,
    state: 'messages'
  })
}

/**
 * Déclenchement à chaque mise a jour du state.
 * current fait reference à la balise 'ref'
 */
componentDidUpdate() {
  const ref = this.messagesRef.current
  ref.scrollTop = ref.scrollHeight //scroll revient au down de facon auto
}


addMessage = message => {
  const messages = {...this.state.messages}
  messages[`message-${Date.now()}`] = message
  
  //On  créer une boucle pour garder les 10 derniers messages
    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null
      })

      this.setState({messages}) //Maj du state
}


//boolean qui va vérifier si nous somme l'utilisateur
isUser = pseudo => pseudo === this.state.pseudo 

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
             isUser={this.isUser}//Importer ds le component message
             key={key}
             message={this.state.messages[key].message}
             pseudo={this.state.messages[key].pseudo} />
           ))

    return (
      <div className='box'>
        <div>
        <div className='messages' ref={this.messagesRef}>
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
