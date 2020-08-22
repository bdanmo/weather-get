const weather = require('./modules/weather');

const zip = process.argv.splice(2);

weather.get(zip);
