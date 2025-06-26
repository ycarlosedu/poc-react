import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{tsx,ts}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      width: {
        none: 'var(--sizing-none)',
        tiny: 'var(--sizing-tiny)',
        extrasmall: 'var(--sizing-extrasmall)',
        small: 'var(--sizing-small)',
        medium: 'var(--sizing-medium)',
        mediumlarge: 'var(--sizing-mediumlarge)',
        large: 'var(--sizing-large)',
        extralarge: 'var(--sizing-extralarge)',
        huge: 'var(--sizing-huge)',
        pico: 'var(--sizing-pico)',
        nano: 'var(--sizing-nano)',
        micro: 'var(--sizing-micro)',
        mini: 'var(--sizing-mini)',
        enormous: 'var(--sizing-enormous)',
        gigantic: 'var(--sizing-gigantic)',
        colossal: 'var(--sizing-colossal)',
      },
      height: {
        none: 'var(--sizing-none)',
        tiny: 'var(--sizing-tiny)',
        extrasmall: 'var(--sizing-extrasmall)',
        small: 'var(--sizing-small)',
        medium: 'var(--sizing-medium)',
        mediumlarge: 'var(--sizing-mediumlarge)',
        large: 'var(--sizing-large)',
        extralarge: 'var(--sizing-extralarge)',
        huge: 'var(--sizing-huge)',
        pico: 'var(--sizing-pico)',
        nano: 'var(--sizing-nano)',
        micro: 'var(--sizing-micro)',
        mini: 'var(--sizing-mini)',
        enormous: 'var(--sizing-enormous)',
        gigantic: 'var(--sizing-gigantic)',
        colossal: 'var(--sizing-colossal)',
      },
      minWidth({ theme }) {
        return {
          ...theme('width'),
        }
      },
      maxWidth({ theme }) {
        return {
          ...theme('width'),
        }
      },
      minHeight({ theme }) {
        return {
          ...theme('height'),
        }
      },
      maxHeight({ theme }) {
        return {
          ...theme('height'),
        }
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        tinycontainer: 'var(--border-radius-tinycontainer)',
        smallcontainer: 'var(--border-radius-smallcontainer)',
        mediumcontainer: 'var(--border-radius-mediumcontainer)',
        largecontainer: 'var(--border-radius-largecontainer)',
        hugecontainer: 'var(--border-radius-hugecontainer)',
        form: 'var(--border-radius-form)',
        pill: 'var(--border-radius-pill)',
      },
      borderWidth: {
        none: 'var(--border-width-none)',
        hairline: 'var(--border-width-hairline)',
        quarterpulse: 'var(--border-width-quarterpulse)',
        halfpulse: 'var(--border-width-halfpulse)',
        onepulse: 'var(--border-width-onepulse)',
        twopulse: 'var(--border-width-twopulse)',
      },
      opacity: {
        transparent: 'var(--opacity-transparent)',
        lowest: 'var(--opacity-lowest)',
        lower: 'var(--opacity-lower)',
        low: 'var(--opacity-low)',
        medium: 'var(--opacity-medium)',
        high: 'var(--opacity-high)',
        higher: 'var(--opacity-higher)',
        highest: 'var(--opacity-highest)',
        opaque: 'var(--opacity-opaque)',
      },
      padding: {
        none: 'var(--padding-inset-none)',
        halfpulse: 'var(--padding-inset-halfpulse)',
        onepulse: 'var(--padding-inset-onepulse)',
        twopulse: 'var(--padding-inset-twopulse)',
        threepulse: 'var(--padding-inset-threepulse)',
        fourpulse: 'var(--padding-inset-fourpulse)',
        fivepulse: 'var(--padding-inset-fivepulse)',
        sixpulse: 'var(--padding-inset-sixpulse)',
        eightpulse: 'var(--padding-inset-eightpulse)',
        tenpulse: 'var(--padding-inset-tenpulse)',
        twelvepulse: 'var(--padding-inset-twelvepulse)',
        sixteenpulse: 'var(--padding-inset-sixteenpulse)',
      },
      spacing: {
        none: 'var(--spacing-stack-none)',
        halfpulse: 'var(--spacing-stack-halfpulse)',
        onepulse: 'var(--spacing-stack-onepulse)',
        twopulse: 'var(--spacing-stack-twopulse)',
        threepulse: 'var(--spacing-stack-threepulse)',
        fourpulse: 'var(--spacing-stack-fourpulse)',
        fivepulse: 'var(--spacing-stack-fivepulse)',
        sixpulse: 'var(--spacing-stack-sixpulse)',
        eightpulse: 'var(--spacing-stack-eightpulse)',
        tenpulse: 'var(--spacing-stack-tenpulse)',
        twelvepulse: 'var(--spacing-stack-twelvepulse)',
        fourteenpulse: 'var(--spacing-stack-fourteenpulse)',
        sixteenpulse: 'var(--spacing-stack-sixteenpulse)',
        eighteenpulse: 'var(--spacing-stack-eighteenpulse)',
        twentypulse: 'var(--spacing-stack-twentypulse)',
        twentytwopulse: 'var(--spacing-stack-twentytwopulse)',
        twentyfourpulse: 'var(--spacing-stack-twentyfourpulse)',
        thirtytwopulse: 'var(--spacing-stack-thirtytwopulse)',
      },
      fontSize: {
        threepulse: 'var(--font-size-threepulse)',
        threeandhalfpulse: 'var(--font-size-threeandhalfpulse)',
        fourpulse: 'var(--font-size-fourpulse)',
        fivepulse: 'var(--font-size-fivepulse)',
        sixpulse: 'var(--font-size-sixpulse)',
        sevenpulse: 'var(--font-size-sevenpulse)',
        eightpulse: 'var(--font-size-eightpulse)',
        ninepulse: 'var(--font-size-ninepulse)',
        tenpulse: 'var(--font-size-tenpulse)',
        elevenpulse: 'var(--font-size-elevenpulse)',
        twelvepulse: 'var(--font-size-twelvepulse)',
        sixteenpulse: 'var(--font-size-sixteenpulse)',
      },
      fontWeight: {
        regular: 'var(--font-weight-regular)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
        extrabold: 'var(--font-weight-extrabold)',
      },
      fontFamily: {
        sans: 'var(--font-family-rdmodernvariable)',
      },
      lineHeight: {
        DEFAULT: 'var(--line-height-default)',
        tiny: 'var(--line-height-tiny)',
        small: 'var(--line-height-small)',
        medium: 'var(--line-height-medium)',
        large: 'var(--line-height-large)',
        none: 'var(--line-height-none)',
      },
      letterSpacing: {
        DEFAULT: 'var(--letter-spacing-tiny)',
        tiny: 'var(--letter-spacing-default)',
      },
      colors: {
        /* Fill Colors */
        fill: {
          neutral: {
            DEFAULT: 'var(--color-fill-neutral-default)',
            alternative: 'var(--color-fill-neutral-alternative)',
            fallback: 'var(--color-fill-neutral-fallback)',
          },
          informative: {
            DEFAULT: 'var(--color-fill-informative-default)',
            alternative: 'var(--color-fill-informative-alternative)',
          },
          success: {
            DEFAULT: 'var(--color-fill-success-default)',
            alternative: 'var(--color-fill-success-alternative)',
            alternative2: 'var(--color-fill-success-alternative2)',
          },
          warning: {
            DEFAULT: 'var(--color-fill-warning-default)',
            alternative: 'var(--color-fill-warning-alternative)',
          },
          danger: {
            DEFAULT: 'var(--color-fill-danger-default)',
            alternative: 'var(--color-fill-danger-alternative)',
            alternative2: 'var(--color-fill-danger-alternative2)',
          },
        },

        /* Border Colors */
        border: {
          neutral: {
            DEFAULT: 'var(--color-border-neutral-default)',
            alternative: 'var(--color-border-neutral-alternative)',
          },
          informative: {
            DEFAULT: 'var(--color-border-informative-default)',
            alternative: 'var(--color-border-informative-alternative)',
          },
          success: {
            DEFAULT: 'var(--color-border-success-default)',
            alternative: 'var(--color-border-success-alternative)',
          },
          warning: {
            DEFAULT: 'var(--color-border-warning-default)',
            alternative: 'var(--color-border-warning-alternative)',
          },
          danger: {
            DEFAULT: 'var(--color-border-danger-default)',
            alternative: 'var(--color-border-danger-alternative)',
          },
        },

        /* Text Colors */
        text: {
          neutral: {
            DEFAULT: 'var(--color-text-neutral-default)',
            alternative: 'var(--color-text-neutral-alternative)',
            placeholder: 'var(--color-text-neutral-placeholder)',
            readonly: 'var(--color-text-neutral-readonly)',
            disabled: 'var(--color-text-neutral-disabled)',
            inverse: 'var(--color-text-neutral-inverse)',
          },
          informative: {
            DEFAULT: 'var(--color-text-informative-default)',
            alternative: 'var(--color-text-informative-alternative)',
            alternative2: 'var(--color-text-informative-alternative2)',
          },
          success: {
            DEFAULT: 'var(--color-text-success-default)',
            alternative: 'var(--color-text-success-alternative)',
          },
          warning: {
            DEFAULT: 'var(--color-text-warning-default)',
            alternative: 'var(--color-text-warning-alternative)',
          },
          danger: {
            DEFAULT: 'var(--color-text-danger-default)',
            alternative: 'var(--color-text-danger-alternative)',
          },
          primary: {
            DEFAULT: 'var(--color-text-primary-default)',
            alternative: 'var(--color-text-primary-alternative)',
          },
          fastdelivery: {
            DEFAULT: 'var(--color-text-fastdelivery-default)',
          },
        },

        /* Labelling Colors */
        labelling: {
          fill: {
            onsale: {
              DEFAULT: 'var(--color-labeling-fill-onsale-default)',
            },
            principal: {
              DEFAULT: 'var(--color-labeling-fill-principal-default)',
            },
            secondary: {
              DEFAULT: 'var(--color-labeling-fill-secondary-default)',
            },
            clube: {
              DEFAULT: 'var(--color-labeling-fill-clube-default)',
            },
            assinatura: {
              DEFAULT: 'var(--color-labeling-fill-assinatura-default)',
            },
            refrigerate: {
              DEFAULT: 'var(--color-labeling-fill-refrigerate-default)',
            },
            prescription: {
              DEFAULT: 'var(--color-labeling-fill-prescription-default)',
            },
            generico: {
              DEFAULT: 'var(--color-labeling-fill-generico-default)',
            },
            referencia: {
              DEFAULT: 'var(--color-labeling-fill-referencia-default)',
            },
            similar: {
              DEFAULT: 'var(--color-labeling-fill-similar-default)',
            },
            stix: {
              DEFAULT: 'var(--color-labeling-fill-stix-default)',
            },
            blog: {
              DEFAULT: 'var(--color-labeling-fill-blog-default)',
            },
          },
          text: {
            onsale: {
              DEFAULT: 'var(--color-labeling-text-onsale-default)',
            },
            principal: {
              DEFAULT: 'var(--color-labeling-text-principal-default)',
            },
            secondary: {
              DEFAULT: 'var(--color-labeling-text-secondary-default)',
            },
            clube: {
              DEFAULT: 'var(--color-labeling-text-clube-default)',
            },
            assinatura: {
              DEFAULT: 'var(--color-labeling-text-assinatura-default)',
            },
            refrigerate: {
              DEFAULT: 'var(--color-labeling-text-refrigerate-default)',
            },
            prescription: {
              DEFAULT: 'var(--color-labeling-text-prescription-default)',
            },
            generico: {
              DEFAULT: 'var(--color-labeling-text-generico-default)',
            },
            referencia: {
              DEFAULT: 'var(--color-labeling-text-referencia-default)',
            },
            similar: {
              DEFAULT: 'var(--color-labeling-text-similar-default)',
            },
            stix: {
              DEFAULT: 'var(--color-labeling-text-stix-default)',
            },
            blog: {
              DEFAULT: 'var(--color-labeling-text-blog-default)',
            },
          },
        },

        /* Forms Colors */
        forms: {
          fill: {
            DEFAULT: 'var(--color-forms-fill-default)',
            hovered: 'var(--color-forms-fill-hovered)',
            filled: 'var(--color-forms-fill-filled)',
            disabled: 'var(--color-forms-fill-disabled)',
            readonly: 'var(--color-forms-fill-readonly)',
            focused: 'var(--color-forms-fill-focused)',
            error: 'var(--color-forms-fill-error)',
          },
          border: {
            DEFAULT: 'var(--color-forms-border-default)',
            hovered: 'var(--color-forms-border-hovered)',
            filled: 'var(--color-forms-border-filled)',
            disabled: 'var(--color-forms-border-disabled)',
            readonly: 'var(--color-forms-border-readonly)',
            focused: 'var(--color-forms-border-focused)',
            error: 'var(--color-forms-border-error)',
          },
        },

        /* Action Colors */
        action: {
          text: {
            onbrand: {
              DEFAULT: 'var(--color-action-text-onbrand-default)',
              hovered: 'var(--color-action-text-onbrand-hovered)',
              pressed: 'var(--color-action-text-onbrand-pressed)',
              activated: 'var(--color-action-text-onbrand-activated)',
            },
          },
          fill: {
            brand: {
              primary: {
                enabled: 'var(--color-action-fill-brand-primary-enabled)',
                hovered: 'var(--color-action-fill-brand-primary-hovered)',
                pressed: 'var(--color-action-fill-brand-primary-pressed)',
                activated: 'var(--color-action-fill-brand-primary-activated)',
                disabled: 'var(--color-action-fill-brand-primary-disabled)',
              },
            },
            neutral: {
              secondary: {
                enabled: 'var(--color-action-fill-neutral-secondary-enabled)',
                hovered: 'var(--color-action-fill-neutral-secondary-hovered)',
                pressed: 'var(--color-action-fill-neutral-secondary-pressed)',
                activated:
                  'var(--color-action-fill-neutral-secondary-activated)',
                disabled: 'var(--color-action-fill-neutral-secondary-disabled)',
              },
              tertiary: {
                enabled: 'var(--color-action-fill-neutral-tertiary-enabled)',
                hovered: 'var(--color-action-fill-neutral-tertiary-hovered)',
                pressed: 'var(--color-action-fill-neutral-tertiary-pressed)',
                activated:
                  'var(--color-action-fill-neutral-tertiary-activated)',
                disabled: 'var(--color-action-fill-neutral-tertiary-disabled)',
              },
            },
            onbrand: {
              enabled: 'var(--color-action-fill-onbrand-enabled)',
              hovered: 'var(--color-action-fill-onbrand-hovered)',
              pressed: 'var(--color-action-fill-onbrand-pressed)',
              activated: 'var(--color-action-fill-onbrand-activated)',
              disabled: 'var(--color-action-fill-onbrand-disabled)',
            },
            emphasis: {
              enabled: 'var(--color-action-fill-emphasis-enabled)',
              hovered: 'var(--color-action-fill-emphasis-hovered)',
              pressed: 'var(--color-action-fill-emphasis-pressed)',
              activated: 'var(--color-action-fill-emphasis-activated)',
              disabled: 'var(--color-action-fill-emphasis-disabled)',
            },
          },
          border: {
            focused: 'var(--color-action-border-focused)',
            brand: {
              primary: {
                enabled: 'var(--color-action-border-brand-primary-enabled)',
                hovered: 'var(--color-action-border-brand-primary-hovered)',
                pressed: 'var(--color-action-border-brand-primary-pressed)',
                activated: 'var(--color-action-border-brand-primary-activated)',
                disabled: 'var(--color-action-border-brand-primary-disabled)',
              },
            },
            neutral: {
              secondary: {
                enabled: 'var(--color-action-border-neutral-secondary-enabled)',
                hovered: 'var(--color-action-border-neutral-secondary-hovered)',
                pressed: 'var(--color-action-border-neutral-secondary-pressed)',
                activated:
                  'var(--color-action-border-neutral-secondary-activated)',
                disabled:
                  'var(--color-action-border-neutral-secondary-disabled)',
              },
              tertiary: {
                enabled: 'var(--color-action-border-neutral-tertiary-enabled)',
                hovered: 'var(--color-action-border-neutral-tertiary-hovered)',
                pressed: 'var(--color-action-border-neutral-tertiary-pressed)',
                activated:
                  'var(--color-action-border-neutral-tertiary-activated)',
                disabled:
                  'var(--color-action-border-neutral-tertiary-disabled)',
              },
            },
            onbrand: {
              enabled: 'var(--color-action-border-onbrand-enabled)',
              hovered: 'var(--color-action-border-onbrand-hovered)',
              pressed: 'var(--color-action-border-onbrand-pressed)',
              activated: 'var(--color-action-border-onbrand-activated)',
              disabled: 'var(--color-action-border-onbrand-disabled)',
            },
            emphasis: {
              enabled: 'var(--color-action-border-emphasis-enabled)',
              hovered: 'var(--color-action-border-emphasis-hovered)',
              pressed: 'var(--color-action-border-emphasis-pressed)',
              activated: 'var(--color-action-border-emphasis-activated)',
              disabled: 'var(--color-action-border-emphasis-disabled)',
            },
          },
        },
      },
      ringWidth: {
        none: 'var(--border-width-none)',
        quarterpulse: 'var(--border-width-quarterpulse)',
        halfpulse: 'var(--border-width-halfpulse)',
        onepulse: 'var(--border-width-onepulse)',
        twopulse: 'var(--border-width-twopulse)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
