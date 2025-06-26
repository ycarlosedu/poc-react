import * as React from 'react'

import { useTheme } from '~/hooks/use-theme'
import { cn } from '~/utils/cn'

/**
 * Conjunto de opções de cor disponíveis para o componente Refresh.
 */
export type RefreshColor = 'brand' | 'neutral' | 'black' | 'white'

/**
 * Propriedades do componente Refresh.
 */
export type RefreshProps = {
  /**
   * Define a cor do ícone de carregamento com base nos tokens do tema.
   * - `brand`: usa a cor primária da marca.
   * - `neutral`: usa um tom neutro de leitura.
   * - `black`: usa a cor padrão para texto.
   * - `white`: usa a cor inversa (geralmente branco).
   *
   * @default "brand"
   */
  color?: RefreshColor

  /**
   * Texto alternativo para acessibilidade (leitores de tela).
   * É renderizado como `aria-label` e como conteúdo do elemento `<title>` do SVG.
   */
  srText?: string
}

/**
 * Componente de ícone animado de carregamento, com suporte a temas e acessibilidade.
 */
export function Refresh({ color = 'brand', srText }: RefreshProps) {
  const theme = useTheme()

  const colorMap = React.useMemo(() => {
    return {
      brand: theme.colorActionFillBrandPrimaryEnabled,
      neutral: theme.colorTextNeutralReadonly,
      black: theme.colorTextNeutralDefault,
      white: theme.colorTextNeutralInverse,
    }
  }, [theme])

  const fillColor = colorMap[color]

  return (
    <div
      role="status"
      className={cn('grid size-8 place-items-center')}
      aria-label={srText}
    >
      <svg className={cn('size-6 animate-spin fill-none')} viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0v2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12H0z"
          fill={fillColor}
        />
        <title>{srText}</title>
      </svg>
    </div>
  )
}

export * from './deprecated'
