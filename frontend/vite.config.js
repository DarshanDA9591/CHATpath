import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_CHAT_ENGINE_PROJECT_ID': JSON.stringify(process.env.VITE_CHAT_ENGINE_PROJECT_ID)
  }
});
