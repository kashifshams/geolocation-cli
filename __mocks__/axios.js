const mockResponses = {
  "90210": { data: { features: [{ properties: { city: "Beverly Hills", lat: 34.0901, lon: -118.4065 } }] } },
  "Los Angeles": { data: { features: [{ properties: { city: "Los Angeles", lat: 34.0537, lon: -118.2428 } }] } }
};

const axios = {
  get: jest.fn((url) => {
    const zip = url.split("=")[1];
    if (mockResponses[zip]) {
      return Promise.resolve(mockResponses[zip]);
    }
    return Promise.reject(new Error("No results found"));
  })
};

module.exports = axios;
