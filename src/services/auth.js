

const baseUrl = 'http://localhost:8000/api';


export const getUser = (username) => 
fetch(`${baseUrl}/get-user/${username}`)

.then(res => res.json())


// export const create = async (beerData) => {
//     let response = await fetch(`${baseUrl}/add-beer`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify(beerData)
//     });

//     let result = await response.json();

//     return result;
// };

