import type { Meta, StoryObj } from "@storybook/react-vite"

import * as Button from "@/_ui/v2/components/button"

export default {
  title: 'Version 2/Components/Button',
  component: Button.Root,
  args: {
    children: 'Button'
  }
} satisfies Meta

type ButtonStory = StoryObj

export const Basic: ButtonStory = {}
