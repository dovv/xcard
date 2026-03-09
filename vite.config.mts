import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import path from "path"

export default defineConfig({
  plugins: [
    RubyPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app/javascript"),
      "@shared": path.resolve(__dirname, "app/javascript/shared"),
      "@admin": path.resolve(__dirname, "app/javascript/domains/admin"),
      "@help": path.resolve(__dirname, "app/javascript/domains/help"),
      "@me": path.resolve(__dirname, "app/javascript/domains/me")
    }
  },
  build: {
    rollupOptions: {
      input: {
        admin: "app/javascript/entrypoints/admin.js",
        help: "app/javascript/entrypoints/help.js",
        me: "app/javascript/entrypoints/me.js"
      }
    }
  },
  server: {
    host: "localhost",
    port: 3036,
    hmr: {
      host: "localhost"
    }
  }
})
