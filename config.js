require("dotenv").config();

module.exports = {
  API_KEY: process.env.API_KEY,
  BASE_URL: "http://api.openweathermap.org/geo/1.0/",
  ZIP_BASE_URL: "http://api.openweathermap.org/data/2.5/",
};
