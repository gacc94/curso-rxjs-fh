const url: string = `https://api.github/users?per_page=5`;

const fetchPromise = fetch(url);

fetchPromise
    .then(resp => {
        if(!resp.ok) {
            return resp.status
        }
        return  resp.json()
    })
    .then(data => console.log(data))
    .catch( err => console.error(err))
    .finally()
