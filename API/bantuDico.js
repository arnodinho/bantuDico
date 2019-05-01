//C'est une très bonne pratique de séparer la logique API du reste de l'application.

const API_TOKEN = "UyRhhSnqhBxHOhcAZ4yT5Ts+SpM4WR9zNV2m5enp2e0rMwioCW3+rU0wVvYD+aDiPBg=";

export function searchTraduction (text) {

  return fetch('https://bantu-dico.com/api/frenchlingala/search', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token': API_TOKEN
              },
              body: JSON.stringify({
                identifier: 'lingala_id',
                search: text,
              }),
            }).then((response) => response.json())
              .catch((error) => console.error(error));
}
