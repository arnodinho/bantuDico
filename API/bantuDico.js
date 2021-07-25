//C'est une très bonne pratique de séparer la logique API du reste de l'application.
import dataLingala from '../Helpers/FrenchLingala'
import dataSango   from '../Helpers/FrenchSango'
const API_TOKEN = "T/6wiLml8CM8yiuAxl0NJurKWQvb6JW4ttSN1XMLzZeJFwHmVpf0CWO79E5AsTegFec=";

export function searchTraduction (text,source,target) {

  switch (source) {
    case 'french':
        translate = target === 'sango' ? 'frenchsango' : 'frenchlingala';
        identifier = 'french_id';
        break;
    case 'sango':
        translate = 'frenchsango';
        identifier = 'sango_id';
        break;
    default:
          translate = 'frenchlingala';
          identifier = 'lingala_id';
  }
  url = 'https://bantu-dico.com/api/'+translate+'/search';
  return fetch(url, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token': API_TOKEN
              },
              body: JSON.stringify({
                identifier: identifier,
                search: text,
              }),
            }).then((response) => response.json())
              .catch((error) => console.error(error));
}

// Récupération du détail
export function getTranslationById (id, target) {
  translate = target === 'sango' ? 'frenchsango' : 'frenchlingala';
  url = 'https://bantu-dico.com/api/'+translate+'/'+id;

  return fetch(url, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'X-Auth-Token': API_TOKEN,
              },
  }).then((response) => response.json())
    .catch((error) => console.error(error));
}

//on genere un randi=om id pour les translations random
export function randomId(){
// return Math.floor(Math.random() * 100) + 1;
var min=1;
var max=600;
return Math.floor(Math.random() * (+max - +min)) + +min;
}

//retourne une translation random en fonction du language
export function randomTranslation(language){
  var min=1;
  var max=250;
  var id = Math.floor(Math.random() * (+max - +min)) + +min;
  var trad =  language == 'lingala' ? dataLingala[id] :dataSango[id]

  return trad
}


export function createTranslation (language, source, target) {

  translate = language === 'sango' ? 'frenchsango' : 'frenchlingala';

  url = 'https://bantu-dico.com/api/'+translate;
  return fetch(url, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token': API_TOKEN
              },
              body: JSON.stringify({
                french: source,
                traduction: target,
                check: true
              }),
            }).then((response) => response.json())
              .catch((error) => console.error(error));
}
//ajout d'une nouvelle translation
export function search (text,language) {

  url = 'https://bantu-dico.com/api/'+language+'/search';

  return fetch(url, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token': API_TOKEN
              },
              body: JSON.stringify({
                identifier: "word",
                search: text
              }),
            }).then((response) => response.json())
              .catch((error) => console.error(error));
}
