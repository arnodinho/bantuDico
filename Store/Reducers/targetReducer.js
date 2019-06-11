// la partie visuelle, avec vos components dont les fichiers
// commencent par une majuscule, de la partie fonctionnelle, avec vos fonctions, vos reducers, vos datas, etc.
import { createStore } from 'redux';

 toggleLanguage = (state = {target:[]}, action) => {

  switch (action.type) {
        case 'TOGGLE_LANGUAGE':
            state = {...state, target: action.value }

            console.log("on est dans le switch")
            console.log(state)
            return Object.assign({}, state, {
  visibilityFilter: action.value
})


            break;
        default:
        console.log("on est dans le default")
            break;
    }
    console.log("on est apres le switch")
    console.log("aa "+action.type)

    return state
};

store = createStore(toggleLanguage)
export default store
