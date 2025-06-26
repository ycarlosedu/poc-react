import { tv } from '~/utils/tv'

const buttonStyles = tv({
  slots: {
    root: [
      'inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap',
      'gap-x-[var(--spacing-inline-twopulse)] rounded-full',
      'outline-[var(--color-action-border-focused)] outline-offset-2',
      'font-bold font-sans tracking-[var(--letter-spacing-default)]',
      'focus-visible:outline-2',
      'disabled:cursor-not-allowed disabled:text-[var(--color-text-neutral-disabled)]',
    ],
  },
  variants: {
    variant: {
      'brand-primary': {
        root: [
          'bg-[var(--color-action-fill-brand-primary-enabled)]',
          'text-[var(--color-text-neutral-inverse)]',
          'enabled:hover:bg-[var(--color-action-fill-brand-primary-hovered)]',
          'active:bg-[var(--color-action-fill-brand-primary-pressed)]',
          'disabled:bg-[var(--color-action-fill-brand-primary-disabled)]',
        ],
      },
      'neutral-secondary': {
        root: [
          'ring-[var(--color-action-border-neutral-secondary-enabled)]',
          'ring-[length:var(--border-width-quarterpulse)]',
          'bg-[var(--color-action-fill-neutral-secondary-enabled)]',
          'text-[var(--color-text-neutral-default)]',
          'enabled:hover:ring-[var(--color-action-border-neutral-secondary-hovered)]',
          'enabled:hover:bg-[var(--color-action-fill-neutral-secondary-hovered)]',
          'active:ring-[var(--color-action-border-neutral-secondary-pressed)]',
          'active:bg-[var(--color-action-fill-neutral-secondary-pressed)]',
          'disabled:ring-[var(--color-action-border-neutral-secondary-disabled)]',
          'disabled:bg-[var(--color-action-fill-neutral-secondary-disabled)]',
        ],
      },
      'neutral-tertiary': {
        root: [
          'ring-[var(--color-action-border-neutral-tertiary-enabled)]',
          'ring-[length:var(--border-width-quarterpulse)]',
          'bg-[var(--color-action-fill-neutral-tertiary-enabled)]',
          'text-[var(--color-text-neutral-default)]',
          'enabled:hover:ring-[var(--color-action-border-neutral-tertiary-hovered)]',
          'enabled:hover:bg-[var(--color-action-fill-neutral-tertiary-hovered)]',
          'active:ring-[var(--color-action-border-neutral-tertiary-pressed)]',
          'active:bg-[var(--color-action-fill-neutral-tertiary-pressed)]',
          'disabled:ring-[var(--color-action-border-neutral-tertiary-disabled)]',
          'disabled:bg-[var(--color-action-fill-neutral-tertiary-disabled)]',
        ],
      },
    },
    size: {
      md: {
        root: [
          'h-[var(--sizing-medium)] min-w-8 px-[var(--padding-inset-fourpulse)]',
          'text-[length:var(--font-size-threepulse)]',
          'leading-[var(--line-height-medium)]',
        ],
      },
      ml: {
        root: [
          'h-[var(--sizing-mediumlarge)] min-w-10 px-[var(--padding-inset-fourpulse)]',
        ],
      },
      lg: {
        root: [
          'h-[var(--sizing-large)] min-w-12 px-[var(--padding-inset-fivepulse)]',
        ],
      },
      xl: {
        root: [
          'h-[var(--sizing-extralarge)] min-h-14 px-[var(--padding-inset-sixpulse)]',
        ],
      },
    },
    asIconOnly: {
      true: {
        root: 'aspect-square px-0',
      },
    },
  },
  compoundVariants: [
    {
      size: ['ml', 'lg'],
      class: {
        root: [
          'text-[length:var(--font-size-threeandhalfpulse)]',
          'leading-[var(--line-height-small)]',
        ],
      },
    },
  ],
  defaultVariants: {
    variant: 'brand-primary',
    size: 'ml',
    asIconOnly: false,
  },
})

export const { root } = buttonStyles()
