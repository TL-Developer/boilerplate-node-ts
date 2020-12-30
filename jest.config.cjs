module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  testMatch: [
    '**/tests/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
};
