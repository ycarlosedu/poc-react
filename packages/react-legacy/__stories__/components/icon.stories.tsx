import type { Meta, StoryObj } from '@storybook/react-vite'

import { RDSAUDESISTEMAS_TOKENS } from '@raiadrogasil/pulso-design-tokens'
import { ICON_NAMES } from '@raiadrogasil/pulso-icons'

import { Icon, type IconProps } from '~/components/icon'
import { ThemeProvider } from '~/components/theme-provider'

export default {
  title: 'Legacy/Components/Icon',
  argTypes: {
    symbol: {
      description: 'Nome do ícone a ser renderizado.',
      control: 'select',
      options: [...ICON_NAMES],
      table: {
        category: 'Conteúdo',
      },
    },
    size: {
      description:
        'Controla o tamanho do ícone. Opções: tiny, extra-small, small, medium.',
      control: 'inline-radio',
      options: ['tiny', 'extra-small', 'small', 'medium'],
      table: {
        category: 'Tamanho',
      },
    },
    color: {
      description:
        'Define a cor visual do ícone com base em um token do design system.',
      control: 'select',
      options: Object.keys(RDSAUDESISTEMAS_TOKENS).map(token => token),
      table: {
        category: 'Visual',
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
          'Ícones são elementos visuais simples e simbólicos usados para representar ações, objetos, ou conceitos em interfaces digitais. Eles facilitam a navegação e compreensão de funcionalidades em aplicativos, sites e sistemas, permitindo que os usuários identifiquem rapidamente botões, seções ou funcionalidades.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<IconProps>

type IconStory = StoryObj<IconProps>

export const Basic: IconStory = {
  name: 'Básico',
  args: {
    symbol: 'rdicon-default',
    size: 'small',
    color: 'colorActionFillBrandPrimaryEnabled',
  },
  render(args) {
    return <Icon {...args} />
  },
}
