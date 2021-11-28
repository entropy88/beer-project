

const baseUrl = 'http://localhost:8000/api';

export function getAll() {
    return fetch(`${baseUrl}/get-beers`)
        .then(res => res.json())
}

export const getOne = (id) => fetch(`${baseUrl}/get-beer/${id}`).then(res => res.json());

export const create = async (beerData) => {
    let response = await fetch(`${baseUrl}/add-beer`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(beerData)
    });

    let result = await response.json();

    return result;
};

export const updateBeer = (id,reqBody) => fetch(`${baseUrl}/update-beer/${id}`,reqBody).then(res => res.json());

export const removeBeer = (id) => fetch(`${baseUrl}/delete-beer/${id}`).then(res => res.json());

// export const getLatest = () => {
//     return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`)
//         .then(res => res.json())
// }