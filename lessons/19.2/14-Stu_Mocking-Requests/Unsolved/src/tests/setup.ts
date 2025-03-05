import { afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers } from '../mocks/userRoutes';

// Declare the MSW server instance using setupServer with the imported handlers
const server = setupServer(...handlers);

// Set up the MSW server before the tests run
beforeAll(() => {
    server.listen(); // Start the server before all tests
});

// Clean up after each test and reset any request handlers to avoid test interference
afterEach(() => {
    cleanup();
    server.resetHandlers(); // Reset any runtime request handlers to the original ones
});

// Close the server after all tests are done
afterAll(() => {
    server.close(); // Close the server after all tests
});
