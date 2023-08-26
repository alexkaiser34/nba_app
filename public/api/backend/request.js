const config = require('./config');

/** make request to web server, which will handle the DB query */
async function request(sql, params) {
    const result = await fetch(config.url + params.endpoint,
        {
            method: params.method,
            headers: config.headers,
            body: JSON.stringify(sql)
        }
    )
   .then(response => {return response.json()})
   .catch(err => console.log(err));
    return result;
}

module.exports = {
    request
}