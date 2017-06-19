
const weather = require('./weather'),
      city = process.argv.slice(2, 3)[0],
      state = process.argv.slice(3, 4)[0];

weather.get(city, state);


