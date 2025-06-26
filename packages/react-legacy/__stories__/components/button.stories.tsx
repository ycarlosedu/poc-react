import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "~/components/button"

export default {
  title: 'Legacy/Components/Button',
  component: Button,
  args: {
    children: 'Button'
  }
} satisfies Meta

type ButtonStory = StoryObj

export const Basic: ButtonStory = {}
