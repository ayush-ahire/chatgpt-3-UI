import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enables access over the network (sets host to 0.0.0.0)
    port: 3000, // Optional: Specify the port (default is 5173)
  },
})
