const http = require('http'),
      api = require('./api.json'),
      print = require('./print');

function getWeather (city, state) {
    try {
        const request = http.get(`http://api.wunderground.com/api/${api.key}/conditions/q/${state}/${city}.json`, 
        res => {
            if (res.statusCode === 200) {
                body = "";
                res.on('data', dataChunk => {
                    body += dataChunk;
                });
                res.on('end', () => {
                    let weather = JSON.parse(body);
                    print.temperature(weather.current_observation);
                })
            } else {
                let code = res.statusCode,
                    message = `There was an error getting weather for ${city}, ${state ? state : ""} (${code}: ${http.STATUS_CODES[code]})`,
                    error = new Error(message);
                print.error(error, "Response error")
            }  
        });

        request.on('error', error => {
            print.error(error, "Problem with request")
        })

    } catch (error) {
        print.error(error, "Node.js server error")
    }
    
}

// print temp details
// handle errrors

module.exports.get = getWeather; 