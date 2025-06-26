import { type VariantProps, createTV } from 'tailwind-variants'

export const tv = createTV({
  twMerge: false,
  twMergeConfig: {
    extend: {
      classGroups: {
        'font-size': [
          {
            text: ['threepulse', 'threeandhalfpulse'],
          },
        ],
        'border-width': [
          {
            border: ['quarterpulse', 'halfpulse'],
          },
        ],
        '--tw-ring-inset': [
          {
            ring: ['none', 'quarterpulse', 'halfpulse'],
          },
        ],
      },
    },
  },
})

export type { VariantProps }
