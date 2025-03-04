import { defineConfig } from "cypress";
import { setupTestClient } from "./cypress/plugins/test-client";

export default defineConfig({
  env: process.env,
  retries: {
    openMode: 0,
  },
  e2e: {
    specPattern: ["cypress/smoke.cy.ts", "cypress/e2e/**/*.cy.ts"],
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });

      setupTestClient(on, config);
    },
  },
});
