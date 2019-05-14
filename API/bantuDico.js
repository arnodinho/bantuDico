//C'est une très bonne pratique de séparer la logique API du reste de l'application.

const API_TOKEN = "UyRhhSnqhBxHOhcAZ4yT5Ts+SpM4WR9zNV2m5enp2e0rMwioCW3+rU0wVvYD+aDiPBg=";

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

// Récupération du détail d'un film
export function getTranslationById (id, target) {
  translate = target === 'sango' ? 'frenchsango' : 'frenchlingala';
  url = 'https://bantu-dico.com/api/'+translate+'/'+id;
  console.log('function get translation '+ target);
  return fetch(url, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'X-Auth-Token': API_TOKEN,
              },
  }).then((response) => response.json())
    .catch((error) => console.error(error));
}
