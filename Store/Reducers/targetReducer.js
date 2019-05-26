// la partie visuelle, avec vos components dont les fichiers
// commencent par une majuscule, de la partie fonctionnelle, avec vos fonctions, vos reducers, vos datas, etc.
const initialState = {target:"sango"}

toggleLanguage = (state = initialState, action) =>{
  let nextState
  switch (action.type) {

        case 'TOGGLE_LANGUAGE':
          nextState = action.value
            return nextState || state

        default:
            return state
    }
};

export default toggleLanguage
