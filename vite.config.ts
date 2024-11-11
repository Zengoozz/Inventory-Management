import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSVG from 'vite-svg';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSVG({default: 'raw'})
  ],
})
