import path from 'node:path'

import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(import.meta.dirname, '../../packages/react/src')
      },
      {
        find: '~',
        replacement: path.resolve(import.meta.dirname, '../../packages/react-legacy/src')
      }
    ]
  }
})
