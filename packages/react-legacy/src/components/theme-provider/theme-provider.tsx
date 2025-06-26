import { createContext, useEffect } from 'react'

import type { Themes } from '@raiadrogasil/pulso-design-tokens'

type TThemeContextData = {
  currentTheme: Themes
}

interface IThemeProviderProps {
  children: React.ReactNode
  theme: Themes
}

export const ThemeContext = createContext({} as TThemeContextData)

export function ThemeProvider({ children, theme }: IThemeProviderProps) {
  useEffect(() => {
    if (theme && document) {
      document?.documentElement?.classList?.add(theme)
    }

    return () => {
      document?.documentElement?.classList?.remove(theme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
