// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000  // Especifica el puerto en el que se ejecutará el servidor de desarrollo
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'atom': path.resolve(__dirname, 'src/components/atoms'),
      'mol': path.resolve(__dirname, 'src/components/molecules'),
      'org': path.resolve(__dirname, 'src/components/organisms'),
      'tmpl': path.resolve(__dirname, 'src/components/templates'),
      'page': path.resolve(__dirname, 'src/components/pages'),
      'slice': path.resolve(__dirname, 'src/features/slices')
    }
  }
});
