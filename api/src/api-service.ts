export async function getDataFromApi() {
    return fetch('https://rickandmortyapi.com/api/character?page=1')
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}