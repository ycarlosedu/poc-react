import * as React from 'react'

import {
  DROGASIL_TOKENS,
  GLOBALS_TOKENS,
  PRIME_TOKENS,
  RAIA_TOKENS,
  RDSAUDESISTEMAS_TOKENS,
  SUBSCRIPTION_TOKENS,
} from '@raiadrogasil/pulso-design-tokens'

import { ThemeContext } from '~/components/theme-provider/theme-provider'

export function useTheme() {
  const mappedTheme = React.useMemo(() => {
    return {
      rdsaudesistemas: RDSAUDESISTEMAS_TOKENS,
      drogasil: DROGASIL_TOKENS,
      raia: RAIA_TOKENS,
      subscription: SUBSCRIPTION_TOKENS,
      prime: PRIME_TOKENS,
    }
  }, [])

  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error(
      '[Pulso] useTheme precisa estar dentro de um <ThemeProvider>. Verifique se o provedor está corretamente configurado na raiz da aplicação.'
    )
  }

  const { currentTheme } = context

  return {
    ...mappedTheme[currentTheme],
    ...GLOBALS_TOKENS,
  }
}
