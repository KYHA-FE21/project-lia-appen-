export const putUser = (data) => {

    fetch(`http://localhost:3004/user/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

export const putAttributes = (data) => {
    fetch(`http://localhost:3004/attribute/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    })
    .catch(error => console.log(error))
}