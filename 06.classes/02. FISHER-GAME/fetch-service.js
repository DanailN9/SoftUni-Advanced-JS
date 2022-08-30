const catches = function () {

    const baseUrl = 'https://fisher-game.firebaseio.com/'

    const get = () => {
        return fetch(baseUrl + '.json').then(r => r.json())
    }

    const post = (data) => {
        return fetch(baseUrl + '.json', {
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(r => r.json());

    }

    const put = () => {

    }

    const del = () => {

    }

    return {
        get,
        post,
        put,
        del,
    }
}();