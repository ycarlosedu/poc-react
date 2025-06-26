import { promises as fs } from 'node:fs'
import path from 'node:path'

import { defineConfig } from 'tsup'

type UIPackageType = 'components' | 'blocks'

const PACKAGE_TYPES: UIPackageType[] = ['components', 'blocks']

// @ts-expect-error
export default defineConfig(async () => {
  const UI_V2_DIR = path.resolve(import.meta.dirname, 'src/_ui/v2')

  const resolvedMap: Record<UIPackageType, string[]> = Object.fromEntries(
    await Promise.all(
      PACKAGE_TYPES.map(async type => {
        const packageDir = path.resolve(UI_V2_DIR, type)
        const folders = await fs.readdir(packageDir)

        const files = folders.map(folder =>
          path.resolve(packageDir, path.join(folder, `${folder}.ts`))
        )

        return [type, files]
      })
    )
  )

  return [
    ...PACKAGE_TYPES.map(type => ({
      entry: resolvedMap[type],
      format: ['esm', 'cjs'],
      external: ['react'],
      dts: true,
      outDir: `dist/v2/${type}`,
    })).concat(),
    {
      entry: ['./src/_ui/legacy.ts'],
      format: ['esm', 'cjs'],
      external: ['react'],
      dts: true,
    }
  ]
})
