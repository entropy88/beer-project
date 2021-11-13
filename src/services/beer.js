

const baseUrl = 'http://localhost:8000/api';

export function getAll() {
    return fetch(`${baseUrl}/get-beers`)
        .then(res => res.json())
}

// export const getOne = (id) => fetch(`${baseUrl}/games/${id}`).then(res => res.json());

// export const getLatest = () => {
//     return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`)
//         .then(res => res.json())
// }