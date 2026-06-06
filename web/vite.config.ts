import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// wasm + topLevelAwait let us `import` the wasm-bindgen ES module that
// `wasm-pack build --target web` emits into web/src/wasm/.
export default defineConfig({
  plugins: [react(), wasm(), topLevelAwait()],
  test: {
    // Default node env is enough for logic tests. Add jsdom + the dep when we
    // start testing React components (milestone 1).
    environment: "node",
  },
});
