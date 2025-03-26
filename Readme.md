# Geolocation CLI Utility

This CLI utility fetches the latitude and longitude coordinates for given locations or zip codes using the **OpenWeather Geocoding API**.

## Prerequisites
- Node.js (v16 or higher)
- NPM
- OpenWeather API Key

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kashifshams/geolocation-cli.git
   cd GeoCodeLocation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your **OpenWeather API Key**:
   ```env
   API_KEY=your_openweather_api_key
   Refer to example .env file or same can be used 
   ```

## Usage

### Run the CLI
The CLI supports searching locations and zip codes together or separately.

#### Search by Location:
```bash
node index.js search -l "Los Angeles,New York" -c "US"
```

#### Search by Zip Code:
```bash
node index.js search -z "90001,10001" -c "US"
```

#### Search by Both Locations and Zip Codes without providing Country code as US:
```bash
node index.js search -l "Los Angeles,New York" -z "10001"
```
#### Search for Both Locations and Zip providing Country US Region:
```bash
node index.js search -l "Los Angeles" -z "10001" -c "US"
```
### Example Output
```
Location: Los Angeles
Latitude: 34.0536909, Longitude: -118.242766
----------------------
Zip Code: 10001
Location: New York
Latitude: 40.7484, Longitude: -73.9967
----------------------
```

## Error Handling
- Invalid locations will display:
  ```
Location not found: [Location Name]
----------------------
```
- Invalid zip codes will display:
  ```
Invalid Zip Code: [Zip Code]
----------------------
```

## Testing

Run the integration tests with:
```bash
npm test
```

### Test Cases
- Fetch coordinates for multiple locations
- Fetch coordinates for multiple zip codes
- Fetch both locations and zip codes in a single command
- Handle invalid locations gracefully
- Handle invalid zip codes gracefully

---
### Author
Kashif

