const util = require('./util.js');

function weather(data) {
  console.log(data);
  let message = `
    *-- Weather for ${data.name} --* 
    General conditions: ${data.weather[0].description} 
    Temperature: ${util.convertTemp(data.main.temp)}º 
    Humidty: ${data.main.humidity}%
    Feels like: ${util.convertTemp(data.main.feels_like)}º
    Sunrise: ${util.time(data.sys.sunrise)}
    Sunset: ${util.time(data.sys.sunset)}
  `;
  console.log(message);
}

function error(error, type = 'Error') {
  console.error(`${type}: ${error.message}`);
}

module.exports.weather = weather;
module.exports.error = error;
