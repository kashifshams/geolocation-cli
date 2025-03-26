const { getCoordinatesByZip, getCoordinatesByName } = require("./geoCode");
//const { getCoordinates } = require("./geoCode");

const args = process.argv.slice(2);
const input = args[0];

if (!input) {
  console.error("❌ Please provide a city name or ZIP code");
  process.exit(1);
}

(async () => {
  try {
    if (/^\d{5}$/.test(input)) {
      console.log(`📍 Searching ZIP: ${input}`);
      await getCoordinatesByZip(input);
    } else {
      console.log(`📍 Searching City: ${input}`);
      await getCoordinatesByName(input);
    }
  } catch (err) {
    if (err.message.includes("Invalid ZIP code")) {
        console.error(`❌ Invalid US ZIP code: ${input}`);
      } else {
        console.error(`❌ ${err.message}`);
      }
    process.exit(1);
  }
})();
