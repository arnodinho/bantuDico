//Dans ce fichier, nous allons utiliser une fonction de la librairie Redux :  createStore
//Vous l'aurez compris, cette fonction permet de créer un store

import { createStore } from 'redux';
import toggleLanguage from './Reducers/targetReducer'

// Lorsque vous allez ajouter un film aux favoris, le state de votre application va être mis à jour. Le store Redux va détecter ce changement et notifier tous les components connectés à votre store Redux, vous savez,
//  tous les components que l'on a connectés grâce à la définition du paramètre  mapStateToProps .
//
// Le component FilmDetail est connecté au store Redux. Il va recevoir la
//  nouvelle liste de films favoris et la mapper à ses props. Les props du component
//   FilmDetail ayant changé, le cycle de vie updating va être exécuté et va pousser le
//   component FilmDetail à se re-rendre avec vos nouvelles props.
//
store = createStore(toggleLanguage)

export default store
