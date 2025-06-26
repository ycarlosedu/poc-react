/**
 * @deprecated Este tipo será removido em versões futuras.
 * Use `RefreshColor` no lugar de `TRefreshColor`.
 *
 * Tipo que define as cores disponíveis para o componente Refresh.
 */
export type TRefreshColor = 'brand' | 'neutral' | 'black' | 'white'

/**
 * @deprecated Esta tipagem será substituída por uma versão mais adequada.
 * Use `RefreshProps` no lugar de `TRefreshProps`.
 *
 * Propriedades do componente Refresh.
 */
export type TRefreshProps = {
  /**
   * @deprecated Use `RefreshProps.color` diretamente.
   * Define a cor do componente com base no tema.
   */
  color?: TRefreshColor

  /**
   * @deprecated Use `RefreshProps.srText` diretamente.
   * Texto acessível para leitores de tela.
   */
  srText?: string
}
