import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.png'],
      manifest: {
        name: 'todoapp',
        short_name: 'todo',
        icons: [
          {
            src: './android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      configs: `${path.resolve(__dirname, './src/configs/')}`,
      dataservices: `${path.resolve(__dirname, './src/dataservices/')}`,
      api: `${path.resolve(__dirname, './src/dataservices/api/')}`,
      slice: `${path.resolve(__dirname, './src/dataservices/slice/')}`,
      helpers: `${path.resolve(__dirname, './src/helpers/')}`,
      init: `${path.resolve(__dirname, './src/init/')}`,
      layouts: `${path.resolve(__dirname, './src/layouts/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      types: `${path.resolve(__dirname, './src/types/')}`,
      themes: `${path.resolve(__dirname, './src/themes/')}`,
      viewport: `${path.resolve(__dirname, './src/viewport/')}`,
    },
  },
});
