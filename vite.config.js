import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: true,  
    allowedHosts: [
      "*.ngrok-free.app"
      
      // "52ade804b699.ngrok-free.app"
    ]
  }
})
