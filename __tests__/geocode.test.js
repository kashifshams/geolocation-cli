const { getCoordinatesByZip, getCoordinatesByName } = require("../geoCode");
jest.mock("axios");

describe("Geocoding Utilities", () => {
    beforeEach(() => {
        console.log = jest.fn().mockClear(); // Reset mock between tests
        console.error = jest.fn().mockClear();
      });
      
  afterEach(() => {
    jest.restoreAllMocks(); // Restore original console methods
  });

  it("should return coordinates for a valid city", async () => {
    await getCoordinatesByName("Los Angeles");
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("📍 Los Angeles"));
  });

  it("should return an error for invalid ZIP codes", async () => {
    await getCoordinatesByZip("123");
    expect(console.error).toHaveBeenCalledWith("❌ Invalid US ZIP code: 123");
  });

  it("should return coordinates for a valid ZIP code", async () => {
    await getCoordinatesByZip("90210");
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("📍 Beverly Hills"));
  });
});
