import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYAs-sYbPWWJfqEol7Mh_vAsV9w7slI8U",
    authDomain: "chatbox-app-4e307.firebaseapp.com",
    databaseURL: "https://chatbox-app-4e307.firebaseio.com",

})

const base = Rebase.createClass(firebase.database())

export {firebaseApp}
export default base
