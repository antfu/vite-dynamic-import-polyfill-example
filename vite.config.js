import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'dynamic-import-polyfill',
      renderDynamicImport() {
        return {
          left: '__import__(',
          right: ', import.meta.url)'
        }
      }
    }
  ],
  server: {
    fsServe: {
      root: '..'
    }
  }
})
