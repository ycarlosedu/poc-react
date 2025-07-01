import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('New Component/Block', {
    description:
      'add a new component or block to the project with a template file',
    prompts: [
      {
        type: 'input',
        name: 'component',
        message: 'What is the name of the new component to create?',
        validate: (input: string) => {
          if (input.includes('.')) {
            return 'component name cannot include an extension'
          }
          if (input.includes(' ')) {
            return 'component name cannot include spaces'
          }
          if (!input) {
            return 'component name is required'
          }
          return true
        },
      },
      {
        type: 'list',
        name: 'folder',
        message: 'In which folder should the file be created?',
        choices: ['blocks', 'components'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/_ui/v3/{{ folder }}/{{ dashCase component }}/{{ dashCase component }}-root.tsx',
        templateFile: 'templates/component/root.hbs',
      },
      {
        type: 'add',
        path: 'src/_ui/v3/{{ folder }}/{{ dashCase component }}/namespace.ts',
        templateFile: 'templates/component/namespace.hbs',
      },
      {
        type: 'add',
        path: 'src/_ui/v3/{{ folder }}/{{ dashCase component }}/{{ dashCase component }}.styles.ts',
        templateFile: 'templates/component/styles.hbs',
      },
    ],
  })
}
