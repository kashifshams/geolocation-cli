const axios = require("axios");
const { API_KEY, BASE_URL } = require("./config");

async function getCoordinatesByName(location) {
  try {
    const url = `${BASE_URL}direct?q=${location}&limit=1&appid=${API_KEY}`;
    const response = await axios.get(url);
    if (response.data.length === 0) {
      console.log(`No results found for ${location}`);
      return null;
    }

    const { lat, lon, name, state, country } = response.data[0];
    console.log(`📍 ${name}, ${state || ""} ${country}`);
    console.log(`Latitude: ${lat}, Longitude: ${lon}\n`);
  } catch (error) {
    console.error(`Error fetching location for ${location}`);
  }
}

async function getCoordinatesByZip(zip) {
  try {
    const url = `${BASE_URL}zip?zip=${zip}&appid=${API_KEY}`;
    const response = await axios.get(url);
    const { lat, lon, name, country } = response.data;
    console.log(`📍 ${name}, ${country}`);
    console.log(`Latitude: ${lat}, Longitude: ${lon}\n`);
  } catch (error) {
    console.error(`Error fetching ZIP code ${zip}`);
  }
}

module.exports = { getCoordinatesByName, getCoordinatesByZip };
