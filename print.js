function temperature (data) {
    let message = `The temperature in ${data.display_location.full} is ${data.temperature_string} 
    with a relative humidity of ${data.relative_humidity}, which feels like ${data.heat_index_string}.`
    console.log(message);
}

function error (error, type = "Error") {
    console.error(`${type}: ${error.message}`)
}

module.exports.temperature = temperature;
module.exports.error = error;