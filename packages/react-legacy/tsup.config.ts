import { promises as fs } from 'node:fs'
import path, { win32, posix } from 'node:path'

import { defineConfig } from 'tsup'

export default defineConfig(async () => {
  function normalizePath(filename: string) {
    return filename.split(win32.sep).join(posix.sep)
  }

  async function entryComponents() {
    const pathComponents = path.resolve('./src/components')

    let pathsAllComponents = await fs.readdir(pathComponents, {
      encoding: 'utf8',
    })

    pathsAllComponents = pathsAllComponents.map(componentName => {
      return normalizePath(`${pathComponents}/${componentName}/index.ts`)
    })

    return pathsAllComponents
  }

  const pathEntryComponents = await entryComponents()

  return {
    entry: ['./src/index.ts', ...pathEntryComponents],
    external: ['react'],
    format: ['cjs', 'esm'],
    sourcemap: true,
    minify: true,
    dts: true,
  }
})
