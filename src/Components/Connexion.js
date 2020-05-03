import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

class Connexion extends Component {

state = {
    pseudo: '',
    goToChat: false
}
/*
Evenement qui prend en compte le changement du pseudo non affecté
*/
handleChange = event => {
    const pseudo = event.target.value
    this.setState({pseudo})
}

handleSubmit = event => {
    event.preventDefault()
    this.setState({goToChat: true})
}


/*
Gestion de la redirection apres enregistrement
*/
    render() {
        if(this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
        }

        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleSubmit}>
                    <input
                    value={this.state.pseudo}//param du handle
                    onChange={this.handleChange}//charge le handle dans le state
                    placeholder='Pseudo'
                    type='text'
                    required/>
                    <button type='submit'>GO</button>
                </form>         
            </div>
        )
    }
}

export default Connexion