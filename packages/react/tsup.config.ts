import { defineConfig } from 'tsup'

// @repo/react/v2/components/button
// @repo/react/v2/blocks/header
// @repo/react/v2/templates/checkout

export default defineConfig(() => {
  return {
    entry: ['./src'],
    format: ['esm', 'cjs'],
    external: ['react'],
    dts: true,
  }
})
