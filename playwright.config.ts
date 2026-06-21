import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  testMatch: '**/*.spec.ts',
  use: {
    baseURL: 'https://app.thetestingacademy.com',
  },
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chromium'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
