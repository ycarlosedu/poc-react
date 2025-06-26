import type { Meta, StoryObj } from '@storybook/react-vite'

import { ICON_NAMES, type IconName } from '@raiadrogasil/pulso-icons'

import { Button, type ButtonProps } from '~/components/button'
import { ThemeProvider } from '~/components/theme-provider'

type ButtonPropsWithArgs = ButtonProps & {
  label: string
  iconSymbol?: IconName
}

const sizes = ['md', 'ml', 'lg', 'xl'] as const

const themes = [
  'rdsaudesistemas',
  'drogasil',
  'raia',
  'prime',
  'subscription',
] as const

export default {
  title: 'Legacy/Components/Button',
  args: {
    label: 'Label',
    variant: 'brand-primary',
    disabled: false,
    loading: false,
    iconSymbol: 'rdicon-default',
  },
  argTypes: {
    label: {
      description: 'Texto que será exibido dentro do botão.',
      table: {
        category: 'Comportamento',
      },
    },
    variant: {
      control: 'inline-radio',
      options: ['brand-primary', 'neutral-secondary', 'neutral-tertiary'],
      description: 'Estilo visual do botão conforme o tema.',
      table: {
        category: 'Aparência',
      },
    },
    disabled: {
      description: 'Desativa o botão e o torna não clicável.',
      table: {
        category: 'Estado',
      },
    },
    loading: {
      description: 'Exibe o spinner de carregamento no botão.',
      table: {
        category: 'Estado',
      },
    },
    iconSymbol: {
      control: 'select',
      options: ICON_NAMES,
      description: 'Ícone exibido dentro do botão.',
      table: {
        category: 'Aparência',
      },
    },
    onClick: {
      control: false,
      table: {
        category: 'Evento',
      },
    },
  },
  decorators: [
    Story => (
      <ThemeProvider theme="rdsaudesistemas">
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Os botões permitem que os usuários realizem ações dentro da aplicação, seja para navegar entre fluxos ou para ativar ou desativar alguma função.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<ButtonPropsWithArgs>

type ButtonStory = StoryObj<ButtonPropsWithArgs>

export const Basic: ButtonStory = {
  name: 'Básico',
  argTypes: {
    iconSymbol: {
      control: false,
    },
  },
  render: args => <Button.Root {...args}>{args.label}</Button.Root>,
}

export const Full: ButtonStory = {
  name: 'Largura total',
  argTypes: {
    iconSymbol: {
      control: false,
    },
  },
  render: args => (
    <div
      style={{
        width: '100%',
        maxWidth: 400,

        paddingBlock: 12,
        paddingInline: 8,

        borderWidth: 1,
        borderColor: 'var(--color-forms-border-error)',
        borderStyle: 'dashed',
      }}
    >
      <Button.Root {...args} full>
        {args.label}
      </Button.Root>
    </div>
  ),
}

export const Sizes: ButtonStory = {
  name: 'Tamanhos',
  render: args => (
    <div
      style={{
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      {sizes.map(size => (
        <div
          key={size}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button.Root {...args} size={size}>
            <Button.Icon symbol={args.iconSymbol} />
            {args.label}
          </Button.Root>
          <span
            style={{
              marginTop: '0.5rem',
              fontSize: '0.875rem',
              color: 'var(--color-text-neutral-default)',
            }}
          >
            {size}
          </span>
        </div>
      ))}
    </div>
  ),
}

export const IconLeft: ButtonStory = {
  name: 'Ícone à esquerda',
  render: args => (
    <Button.Root {...args}>
      <Button.Icon symbol={args.iconSymbol} />
      {args.label}
    </Button.Root>
  ),
}

export const IconRight: ButtonStory = {
  name: 'Ícone à direita',
  render: args => (
    <Button.Root {...args}>
      {args.label}
      <Button.Icon symbol={args.iconSymbol} />
    </Button.Root>
  ),
}

export const IconBoth: ButtonStory = {
  name: 'Ícone à esquerda e à direita',
  render: args => (
    <Button.Root {...args}>
      <Button.Icon symbol={args.iconSymbol} />
      {args.label}
      <Button.Icon symbol={args.iconSymbol} />
    </Button.Root>
  ),
}

export const IconOnly: ButtonStory = {
  name: 'Icon Only - Todos os tamanhos',

  argTypes: {
    label: {
      control: false,
    },
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      {sizes.map(size => (
        <div
          key={size}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button.Root {...args} size={size}>
            <Button.Icon symbol={args.iconSymbol} />
          </Button.Root>
          <span
            style={{
              marginTop: '0.5rem',
              fontSize: '0.875rem',
              color: 'var(--color-text-neutral-default)',
            }}
          >
            {size}
          </span>
        </div>
      ))}
    </div>
  ),
}

export const ThemesGrid: ButtonStory = {
  name: 'Temas organizados por tamanho',
  render: args => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
      }}
    >
      {sizes.map(size => (
        <section key={size}>
          <h3
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
            }}
          >
            Tamanho: {size}
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${themes.length}, minmax(0, 1fr))`,
              gap: '2rem',
              alignItems: 'end',
            }}
          >
            {themes.map(theme => (
              <div
                key={theme}
                className={theme}
                style={{
                  textAlign: 'center',
                }}
              >
                <Button.Root {...args} size={size}>
                  <Button.Icon />
                  {args.label}
                </Button.Root>

                <span
                  style={{
                    display: 'block',
                    marginTop: '0.5rem',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-neutral-default)',
                  }}
                >
                  {theme}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
}
