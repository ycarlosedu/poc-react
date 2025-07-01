import type { Meta, StoryObj } from '@storybook/react-vite'

import { Refresh, type RefreshProps } from '~/components/refresh'
import { ThemeProvider } from '~/components/theme-provider'

export default {
  title: 'Version 2/Components/Refresh',
  argTypes: {
    color: {
      description: 'Define a cor visual do ícone com base no tema.',
      control: 'select',
      options: ['brand', 'neutral', 'black', 'white'],
      table: {
        category: 'Visual',
      },
    },
    srText: {
      description:
        'Texto descritivo para leitores de tela. Também é exibido como título no SVG.',
      control: 'text',
      table: {
        category: 'Acessibilidade',
      },
    },
  },
  decorators: [
    Story => (
      <ThemeProvider theme='rdsaudesistemas'>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'O componente atualiza o conteúdo da aplicação e exibe um sinal de carregamento enquanto isso acontece. Ele garante que você veja sempre as informações mais recentes sem precisar recarregar toda a página.',
      },
    },
  },
  tags: ['autodocs'],
} as Meta<RefreshProps>

type RefreshStory = StoryObj<RefreshProps>

export const Basic: RefreshStory = {
  name: 'Básico',
  args: {
    color: 'brand',
    srText: 'Carregando',
  },
  render(args) {
    return <Refresh {...args} />
  },
}
