/** @type {import('ts-jest').JestConfigWithTsJest} **/

export default {
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest', { tsconfig: './tsconfig.jest.json' }],
  },

  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/{constants,types}/**',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
  coverageDirectory: 'coverage',
};
