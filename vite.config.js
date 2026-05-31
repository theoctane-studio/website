import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173,
    host: "localhost",
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        work: resolve(__dirname, "/work.html"),
        services: resolve(__dirname, "/services.html"),
        process: resolve(__dirname, "/process.html"),
        about: resolve(__dirname, "/about.html"),
        contact: resolve(__dirname, '/contact.html'),
        privacy: resolve(__dirname, '/legal/privacy.html'),
        terms: resolve(__dirname, '/legal/terms.html'),
        disclosures: resolve(__dirname, '/legal/disclosures.html'),
        licensing: resolve(__dirname, "/legal/licensing.html"),
      },
    },
  },
});
