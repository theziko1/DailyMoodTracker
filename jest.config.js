export default {
    transform: {
      "^.+\.(ts|tsx|js|jsx)$": "babel-jest",
    },
    moduleNameMapper: {
      '\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '\.(gif|ttf|eot|svg|png)$': '<rootDir>/mocks/fileMock.js',
    },
    testEnvironment: 'jsdom',
  };
  