import * as React from 'react'

import { injectPropsToChildren } from '~/utils/inject-props-to-children'

export function useEnhancedChildren<T extends object>(
  children: React.ReactNode,
  {
    targets,
    props,
    asChild,
  }: {
    targets: string[]
    props: T
    asChild?: boolean
  }
) {
  const keyPrefix = React.useId()

  return injectPropsToChildren(children, {
    targets,
    props,
    asChild,
    keyPrefix,
  })
}
