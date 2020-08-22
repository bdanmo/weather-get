const http = require('http');
const https = require('https');
const print = require('./print');
const api = require('./api.json');

function getWeather(zip) {
  try {
    const request = https.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${api.key}`,
      res => {
        if (res.statusCode === 200) {
          body = '';
          res.on('data', dataChunk => {
            body += dataChunk;
          });
          res.on('end', () => {
            try {
              let weather = JSON.parse(body);
              if (weather.name) {
                print.weather(weather);
              } else {
                let message = 'Invalid city/state',
                  error = new Error(message);
                print.error(error);
              }
            } catch (error) {
              print(error, 'JSON Parsing Error');
            }
          });
        } else {
          let code = res.statusCode,
            message = `There was an error getting weather for zipcode  ${zip}: (${code}: ${http.STATUS_CODES[code]})`,
            error = new Error(message);
          print.error(error, 'Response error');
        }
      }
    );

    request.on('error', error => {
      print.error(error, 'Problem with request');
    });
  } catch (error) {
    print.error(error, 'Node.js server error');
  }
}

module.exports.get = getWeather;
