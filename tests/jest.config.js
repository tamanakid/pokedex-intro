const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^locale/(.*)$': '<rootDir>/src/locale/$1',
    '^mixins/(.*)$': '<rootDir>/src/mixins/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/tests/e2e'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  collectCoverageFrom: [
    'src/components/*.{js,vue}',
    'src/modules/*.{js,vue}',
    'src/validators/**/*.{js}',
    'src/mixins/*.{js}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ]
};