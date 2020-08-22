/**
 * Receives degrees kelvin and returns degrees fahrenheit
 * @param {number} K - degrees kelvin
 * @returns {number} degrees fahrenheit
 */
function convertTemp(K) {
  return Math.round(((K - 273.15) * 9) / 5 + 32);
}

/**
 * Receives a unix time stamp and returns a simple hours:minutes time (24 hr)
 * @param {number} unix - a unix time stamp
 * @returns  {string} 24 hour time in hours:minutes
 */
function time(unix) {
  const date = new Date(unix * 1000);
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${hour}:${minute}`;
}

module.exports.convertTemp = convertTemp;
module.exports.time = time;
