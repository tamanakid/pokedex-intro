const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^modules/(.*)$': '<rootDir>/src/modules/**/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/tests/e2e'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  collectCoverageFrom: [
    //'src/modules/**/*.{js,vue}',
    'src/validators/**/*.{js}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};