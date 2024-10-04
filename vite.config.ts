import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/chia.6e1af92cf5e7628be6b5af510352b548163e49c28684cad17ef19527b75657d0":
        {
          target: "https://localhost:4161",
          rewrite: (path) => path.replace(/^\/chia\.[\w]+/, "/"),
        },
    },
  },
});
