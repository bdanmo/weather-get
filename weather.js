const http = require('http'),
      api = require('./api.json');

function getWeather (city, state) {
    const request = http.get(`http://api.wunderground.com/api/${api.key}/conditions/q/${state}/${city}.json`, res => {
        body = "";
        res.on('data', dataChunk => {
            body += dataChunk;
        });
        res.on('end', () => {
            //parse the data
            console.log(JSON.parse(body));
            //print the data
        });
        
    })
}

module.exports.get = getWeather; 