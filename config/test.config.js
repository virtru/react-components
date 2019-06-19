/* eslint-disable import/no-extraneous-dependencies */
import { cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

global.afterEach(() => {
  cleanup();

  jest.restoreAllMocks();
});
