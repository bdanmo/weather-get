const http = require('http'),
      api = require('./api.json'),
      print = require('./print');

function getWeather (city, state) {
    const request = http.get(`http://api.wunderground.com/api/${api.key}/conditions/q/${state}/${city}.json`, res => {
        body = "";
        res.on('data', dataChunk => {
            body += dataChunk;
        });
        res.on('end', () => {
            let weather = JSON.parse(body);
            print.temperature(weather.current_observation);
        });
        
    })
}

// print temp details
// handle errrors

module.exports.get = getWeather; 