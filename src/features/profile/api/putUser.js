export const putUser = (data) => {

    fetch(`/user/id=${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

export const putAttributes = (data) => {
    fetch(`/attributes/id=${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    })
    .catch(error => console.log(error))
}