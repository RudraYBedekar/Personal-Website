import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ✅ Good for Netlify/static hosting
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // ✅ Only exclude if needed
  },
});
