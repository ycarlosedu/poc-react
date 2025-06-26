import { Icon, type IconProps } from '~/components/icon'
import type { ButtonSharedProps } from './button-root'

type ButtonIconProps = Omit<ButtonSharedProps, 'asIconOnly'> & {
  symbol?: IconProps['symbol']
}

export function ButtonIcon({
  variant,
  size,
  disabled,
  symbol,
}: ButtonIconProps) {
  const sizeToIconSize: Record<
    NonNullable<ButtonSharedProps['size']>,
    IconProps['size']
  > = {
    md: 'extra-small',
    ml: 'small',
    lg: 'small',
    xl: 'small',
  }

  const variantToIconColor: Record<
    NonNullable<ButtonSharedProps['variant']>,
    IconProps['color']
  > = {
    'brand-primary': 'colorTextNeutralInverse',
    'neutral-secondary': 'colorTextNeutralDefault',
    'neutral-tertiary': 'colorTextNeutralDefault',
  }

  const iconColor = disabled
    ? 'colorTextNeutralDisabled'
    : variantToIconColor[variant!]

  const iconSize = sizeToIconSize[size!]

  return <Icon color={iconColor} size={iconSize} symbol={symbol} />
}

ButtonIcon.displayName = 'ButtonIcon'
