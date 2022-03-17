// Ref: https://github.com/testing-library/jest-dom#usage
import '@testing-library/jest-dom';

// Ref: https://mswjs.io/docs/getting-started/integrate/node
import { server } from './src/mocks/server';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
