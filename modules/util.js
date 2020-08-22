function convertTemp(K) {
  return Math.round(((K - 273.15) * 9) / 5 + 32);
}

function time(unix) {
  const date = new Date(unix * 1000);
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${hour}:${minute}`;
}

module.exports.convertTemp = convertTemp;
module.exports.time = time;
