const baseUrl = 'http://localhost:8000/api';

export function getAll() {
    return fetch(`${baseUrl}/get-beers`)
        .then(res => res.json())
}

export function getAllByUser(userId) {
    return fetch(`${baseUrl}/get-beers`)
        .then(res => res.json())
        .then(filtered=>filtered.filter(r=>r.ownerId==userId))
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

export const updateBeer = async(id, beer)=>{
    let response=await fetch (`${baseUrl}/update-beer/${id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        }, body: JSON.stringify(beer)
    });

    let result= await response.json();
    return result;
};


export const removeBeer = (id) => fetch(`${baseUrl}/delete-beer/${id}`).then(res => res.json());

