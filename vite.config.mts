import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    RubyPlugin(),
  ],
  resolve: {
    alias: {
      "@": "/app/frontend",
    }
  },
  build: {
    rollupOptions: {
      input: {
        admin: "app/frontend/admin/js/app.js",
        help: "app/frontend/help/js/app.js",
        me: "app/frontend/me/js/app.js"
      }
    }
  }
})
