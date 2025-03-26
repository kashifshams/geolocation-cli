const { spawn } = require("child_process");

describe("CLI Integration Tests", () => {
  jest.setTimeout(15000);

  const runCLI = (args) => {
    return new Promise((resolve) => {
      const process = spawn("node", ["index.js", ...args]);
      let output = "";

      process.stdout.on("data", (data) => (output += data.toString()));
      process.stderr.on("data", (data) => (output += data.toString()));

      process.on("close", () => {
        const cleanOutput = output.replace(/[┌┐└┘├┤┬┴┼│]/g, "").trim(); // Clean ASCII tables
        resolve(cleanOutput);
      });
    });
  };

  it("should return coordinates for valid city", async () => {
    const output = await runCLI(["Los Angeles"]);
    expect(output).toMatch(/📍 Searching City: Los Angeles/);
    expect(output).toMatch(/Los Angeles/);
  });

  it("should return error for invalid ZIP code", async () => {
    const output = await runCLI(["123"]);
    expect(output).toMatch(/Invalid US ZIP code/);
  });

  it("should return coordinates for valid ZIP code", async () => {
    const output = await runCLI(["90210"]);
    expect(output).toMatch(/📍 Beverly Hills/);
  });
});