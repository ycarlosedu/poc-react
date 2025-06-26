import * as React from 'react'

type TextProps = React.ComponentProps<'h1'> & {
  as?: keyof React.JSX.IntrinsicElements
}

export function Text({ as = 'h1', children, ...props }: TextProps) {
  return React.createElement(as, props, children)
}
