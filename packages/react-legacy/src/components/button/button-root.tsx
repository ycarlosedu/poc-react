import * as React from 'react'

import type { Assign } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'

import { useEnhancedChildren } from '~/hooks/use-enhanced-children'

import { cn } from '~/utils/cn'
import type { VariantProps } from '~/utils/tv'

import { Refresh, type RefreshColor } from '~/components/refresh'
import { ButtonIcon } from './button-icon'

import { root as rootStyle } from './button.styles'

export type ButtonSharedProps = Omit<
  VariantProps<typeof rootStyle>,
  'asIconOnly'
> & {
  disabled?: boolean
}

export type ButtonRootProps = Assign<
  React.ComponentProps<typeof ark.button>,
  ButtonSharedProps
> & {
  loading?: boolean
  full?: boolean
}

/**
 * @deprecated Este componente foi substituído.
 * Por favor, importe de "@repo/react/v2/components/button"
 */
export function ButtonRoot({
  children,
  className,
  variant = 'brand-primary',
  size,
  disabled,
  loading,
  asChild,
  full,
  ...props
}: ButtonRootProps) {
  const enhancedChildrenWithInjectProps = useEnhancedChildren(children, {
    targets: ['ButtonIcon'],
    props: {
      variant,
      size,
      disabled,
    },
    asChild,
  })

  const shouldShowSpinner = !disabled && loading

  const refreshColorByVariant = {
    'brand-primary': 'white',
    'neutral-secondary': 'black',
    'neutral-tertiary': 'black',
  } as Record<typeof variant, RefreshColor>

  const loadingAccessibilityProps = {
    'aria-live': 'polite',
    'aria-busy': true,
  } as const

  const isOnlyIcon = React.useCallback(() => {
    if (
      React.Children.count(children) === 1 &&
      React.isValidElement(children)
    ) {
      return children.type === ButtonIcon
    }

    return false
  }, [children])

  return (
    <ark.button
      {...props}
      {...(shouldShowSpinner && loadingAccessibilityProps)}
      className={cn(
        rootStyle({
          variant,
          size,
          asIconOnly: isOnlyIcon(),
          className: shouldShowSpinner && 'pointer-events-none',
        }),
        full && 'w-full',
        className
      )}
      disabled={disabled}
      data-scope="button"
    >
      {shouldShowSpinner ? (
        <Refresh color={refreshColorByVariant[variant]} />
      ) : (
        enhancedChildrenWithInjectProps
      )}
    </ark.button>
  )
}

ButtonRoot.displayName = 'ButtonRoot'
