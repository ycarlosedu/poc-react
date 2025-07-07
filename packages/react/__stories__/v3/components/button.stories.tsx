import type { Meta, StoryObj } from '@storybook/react-vite'
import { userEvent, within } from 'storybook/test'

import * as Button from '@/_ui/v3/components/button/button'

export default {
  title: 'Version 3/Components/Button',
  component: Button.Root,
  args: {
    children: 'Button',
  },
} satisfies Meta

type ButtonStory = StoryObj

export const Basic: ButtonStory = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
  },
}
