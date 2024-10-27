/** @type {import('ts-jest').JestConfigWithTsJest} **/

import path from 'node:path';
import { readFileSync } from 'node:fs';
import { pathsToModuleNameMapper } from 'ts-jest';

const loadJSON = (path) =>
  JSON.parse(readFileSync(new URL(path, import.meta.url)));
const { compilerOptions } = loadJSON('./tsconfig.app.json');

export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+.tsx?$': ['ts-jest', { tsconfig: './tsconfig.app.json' }],
  },
  testMatch: ['**/__tests__/**/*.ts?(x)'],

  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      path.resolve('./src/test/mocks/fileMock.js'),
    '\\.css$': path.resolve('./src/test/mocks/styleMock.js'),
    '\\.svg\\?react$': path.resolve(
      './src/test/mocks/svgComponentMock.js',
    ),
    ...Object.entries(
      pathsToModuleNameMapper(compilerOptions.paths),
    ).reduce(
      (acc, [key, url]) => ({
        ...acc,
        [key]: path.resolve(url),
      }),
      {},
    ),
  },

  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/{constants,types}/**',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
  coverageDirectory: 'coverage',

  setupFilesAfterEnv: ['./src/test/setup.ts'],
};
