import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5003,
    proxy: {
      // Proxying API requests
      '/trouve_adresse': {
        target: 'https://dpe-api-service-dev-xfyprtzkyq-ew.a.run.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/trouve_adresse/, '/trouve_adresse')
      }
    }
  }
});
