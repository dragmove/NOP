// Ref: https://jestjs.io/docs/configuration

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: [
    '/__tests__/.*\\.(test|spec)\\.(t|j)sx?$',
    '/src/client/.*\\.(test|spec)\\.(t|j)sx?$',
  ],
  // transform: {
  //   '^.+\\.(t|j)sx?$': 'ts-jest',
  // },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
      diagnostics: true,
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@client/(.*)': '<rootDir>/src/client/$1',
    '^@server/(.*)': '<rootDir>/src/server/$1',
    '^@shared/(.*)': '<rootDir>/src/shared/$1',
    '^@mocks/(.*)': '<rootDir>/src/mocks/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;
