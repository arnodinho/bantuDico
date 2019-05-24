//Dans ce fichier, nous allons utiliser une fonction de la librairie Redux :  createStore
//Vous l'aurez compris, cette fonction permet de créer un store

import { createStore } from 'redux';
import toggleLanguage from './Reducers/targetReducer'

export default createStore(toggleLanguage)
