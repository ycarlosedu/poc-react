import type { TPulsoTokens } from '@raiadrogasil/pulso-design-tokens'
import type { IconName } from '@raiadrogasil/pulso-icons'

/**
 * @deprecated Este tipo será removido em futuras versões. Use tokens de cor diretamente ou outro tipo atualizado.
 *
 * Tipo que representa as cores disponíveis para ícones.
 * Extrai todas as chaves de TPulsoTokens que começam com "color" e mapeia seus valores correspondentes.
 */
export type TIconColors = {
  [K in keyof TPulsoTokens as K extends `color${string}`
    ? K
    : never]: TPulsoTokens[K]
}

/**
 * @deprecated Esta interface será removida em futuras versões. Use a nova interface de propriedades do componente Icon.
 *
 * Interface que define as propriedades do componente Icon.
 */
export type TIconProps = Pick<React.ComponentProps<'i'>, 'aria-hidden'> & {
  symbol?: IconName
  size?: 'tiny' | 'extra-small' | 'small' | 'medium'
  color?: keyof TIconColors
}
