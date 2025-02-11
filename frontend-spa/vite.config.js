import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/oauth2/authorization/keycloak': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/gateway/, ''),
      },
      '/userinfo': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/gateway/, ''),
      },
      '/resource': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/gateway/, ''),
      },
      '/callback': {
        target: 'http://localhost:9000/login/oauth2/code/keycloak',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/callback/, ''),
      },
    }
  }
})
