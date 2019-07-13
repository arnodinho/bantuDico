//C'est une très bonne pratique de séparer la logique API du reste de l'application.
import dataLingala from '../Helpers/FrenchLingala'
import dataSango   from '../Helpers/FrenchSango'
const API_TOKEN = "3i59DIOIOzNWGIQAxy0MzdrqJFMRRrOspx7TU5LdA7SnXbul+1zJkdZNi8rTTb1XAtM=";

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
              .catch((error) => JSON.parse('{ "errCode": 500, "errMesg": "api not responding" }'));
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
console.log(id)
  return trad
}
