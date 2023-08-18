const config = require('../config');

/** make request to web server, which will handle the DB query */
async function query(sql, params) {
    const result = await fetch(config.url,
        {
            method: config.method,
            headers: config.headers,
            body: JSON.stringify({ "query": sql })
        }
    )
   .then(response => {return response.json()})
   .catch(err => console.log(err));
    return result;
}

module.exports = {
    query
}