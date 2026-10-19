import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: 'html',

  use: {
    headless: true,
  },

  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },

    {
      name: 'edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
  ],
});