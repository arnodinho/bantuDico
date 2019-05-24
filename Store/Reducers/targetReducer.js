// la partie visuelle, avec vos components dont les fichiers
// commencent par une majuscule, de la partie fonctionnelle, avec vos fonctions, vos reducers, vos datas, etc.
import { combineReducers } from 'redux';

const initialState = {target:"sango"}

toggleLanguage = (state = initialState, action) =>{

      return state
};

export default combineReducers({
  target: toggleLanguage,
});
