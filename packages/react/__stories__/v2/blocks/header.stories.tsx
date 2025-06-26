import type { Meta, StoryObj } from '@storybook/react-vite'

import * as Header from "@/_ui/v2/blocks/header/header";

export default {
  title: 'Version 2/Blocks/Header',
  component: Header.Root
} satisfies Meta

type HeaderStory = StoryObj

export const Basic: HeaderStory = {}
