const convertToCelsius = function(temperature) {
  let convertedTemperature = (temperature - 32) * (5 / 9);
  let to_One_Decimal = Math.round(convertedTemperature * 10) / 10;
  return (to_One_Decimal);
};

const convertToFahrenheit = function(temperature) {
  let convertedTemperature = (temperature * (9 / 5)) + 32;
  let to_One_Decimal = Math.round(convertedTemperature * 10) / 10;
  return (to_One_Decimal);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
