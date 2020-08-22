const weather = require('./weather');

const zip = process.argv.splice(2);

weather.get(zip);
