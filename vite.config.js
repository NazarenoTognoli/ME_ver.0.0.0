// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';  // Importar el módulo path

export default defineConfig({
  server: {
    port: 3000  // Especifica el puerto en el que se ejecutará el servidor de desarrollo
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Añade un alias para la carpeta 'src'
    }
  },

  // Otras opciones de configuración según sea necesario
});
