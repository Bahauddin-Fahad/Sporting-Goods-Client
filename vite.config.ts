import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@babel/runtime/helpers/extends": "@babel/runtime/helpers/extends",
      "@babel/runtime/helpers/inheritsLoose":
        "@babel/runtime/helpers/inheritsLoose",
    },
  },
});
