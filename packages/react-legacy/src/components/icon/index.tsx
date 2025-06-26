import * as React from 'react'

import type { RDSAUDESISTEMAS_TOKENS } from '@raiadrogasil/pulso-design-tokens'
import type { IconName } from '@raiadrogasil/pulso-icons'

import { useTheme } from '~/hooks/use-theme'

type IconVisualSize = 'tiny' | 'extra-small' | 'small' | 'medium'
type DesignTokens = typeof RDSAUDESISTEMAS_TOKENS

type TokenColorKeys = {
  [K in keyof DesignTokens as K extends `color${string}`
    ? K
    : never]: DesignTokens[K]
}

/**
 * Propriedades do componente Icon.
 */
export type IconProps = React.ComponentProps<'i'> & {
  /**
   * Define o ícone a ser exibido, com base na lista de nomes disponíveis em `@raiadrogasil/pulso-icons`.
   *
   * @default 'rdicon-default'
   */
  symbol?: IconName

  /**
   * Define o tamanho visual do ícone, controlando o `font-size` com base nos tokens de espaçamento.
   *
   * Valores possíveis: 'tiny', 'extra-small', 'small', 'medium'.
   *
   * @default 'small'
   */
  size?: IconVisualSize

  /**
   * Define a cor do ícone usando uma chave de token de cor do design system.
   * A cor é aplicada via `style.color`.
   *
   * @default 'colorActionFillBrandPrimaryEnabled'
   */
  color?: keyof TokenColorKeys
}

export function Icon({
  symbol = 'rdicon-default',
  size = 'small',
  color = 'colorActionFillBrandPrimaryEnabled',
  ...props
}: IconProps) {
  const theme = useTheme()

  const resolvedFontSizes = React.useMemo(() => {
    return {
      tiny: theme.sizingTiny,
      'extra-small': theme.sizingExtrasmall,
      small: theme.sizingSmall,
      medium: theme.sizingMedium,
    }
  }, [])

  return (
    <i
      {...props}
      className={symbol}
      style={{
        fontSize: resolvedFontSizes[size],
        color: theme[color],
      }}
    />
  )
}

Icon.displayName = 'Icon'

export * from './deprecated'
