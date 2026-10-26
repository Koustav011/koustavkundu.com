import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Custom domain (koustavkundu.com) is served from the root, so base stays '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
});
