import path from 'node:path'

import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(
          import.meta.dirname,
          '../../packages/react/src'
        ),
      },
      {
        find: '~',
        replacement: path.resolve(
          import.meta.dirname,
          '../../packages/react-legacy/src'
        ),
      },
    ],
  },
})
