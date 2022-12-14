import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
/// <reference types="vite-plugin-svgr/client" />

export default defineConfig({
  plugins: [svgr({}), react()],
  define: {
    'process.env': {
      REACT_APP_BASE_URL: 'https://yqrc-api-queue.gaytomycode.com',
      REACT_APP_IDENTITY_URL: 'https://yqrc-api-identity.gaytomycode.com',
    },
  },
})
