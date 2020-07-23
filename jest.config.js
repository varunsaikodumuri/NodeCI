const { defaults } = require("jest-config");
module.exports = {
    // setupTestFrameworkScriptFile has been deprecated in
    // favor of setupFilesAfterEnv in jest 24
    setupFilesAfterEnv: ['./tests/jest.setup.js'],
    testEnvironment: "node"
  }