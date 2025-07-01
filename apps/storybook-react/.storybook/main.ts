import path from 'node:path'
import type { StorybookConfig } from '@storybook/react-vite'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return path.dirname(require.resolve(path.join(value, 'package.json')))
}
const config: StorybookConfig = {
  stories: [
    '../../../packages/react/__stories__/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../packages/react-legacy/__stories__/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  previewHead: head => {
    const basePath = process.env.STORYBOOK_ENV === 'production' ? './' : '/'

    return `
        ${head}
        <script>
          const basePath = '${basePath}';

          document.write('<link rel="stylesheet" href="' + basePath + 'RD-Sans-Symbols.css">');
          document.write(\`
            <style>
              @font-face {
                font-family: "RD Modern";
                src: url("\${basePath}/fonts/RDModern-Bold.ttf") format("truetype");
                font-weight: bold;
                font-style: normal;
              }

              @font-face {
                font-family: "RD Modern";
                src: url("\${basePath}/fonts/RDModern-BoldItalic.ttf") format("truetype");
                font-weight: bold;
                font-style: italic;
              }

              @font-face {
                font-family: "RDModern";
                src: url("\${basePath}/fonts/RDModern-ExtraBold.ttf") format("truetype");
                font-weight: 800;
                font-style: normal;
              }

              @font-face {
                font-family: "RD Modern";
                src: url("\${basePath}/fonts/RDModern-ExtraBoldItalic.ttf") format("truetype");
                font-weight: 800;
                font-style: italic;
              }

              @font-face {
                font-family: "RDModern";
                src: url("\${basePath}/fonts/RDModern-ExtraLight.ttf") format("truetype");
                font-weight: 200;
                font-style: normal;
              }

              @font-face {
                font-family: "RD Modern";
                src: url("\${basePath}/fonts/RDModern-ExtraLightItalic.ttf") format("truetype");
                font-weight: 200;
                font-style: italic;
              }

              @font-face {
                font-family: "RD Modern";
                src: url("\${basePath}/fonts/RDModern-Italic.ttf") format("truetype");
                font-weight: normal;
                font-style: italic;
              }

              @font-face {
                font-family: "RD Modern";
                src: url("\${basePath}/fonts/RDModern-Light.ttf") format("truetype");
                font-weight: 300;
                font-style: normal;
              }

              @font-face {
                font-family: "RD Modern";
                src: url("\${basePath}/fonts/RDModern-LightItalic.ttf") format("truetype");
                font-weight: 300;
                font-style: italic;
              }

              @font-face {
                font-family: "RD Modern";
                src: url("\${basePath}/fonts/RDModern-Medium.ttf") format("truetype");
                font-weight: 500;
                font-style: normal;
              }

              @font-face {
                font-family: "RD Modern";
                src: url("\${basePath}/fonts/RDModern-MediumItalic.ttf") format("truetype");
                font-weight: 500;
                font-style: italic;
              }

              @font-face {
                font-family: "RD Modern";
                src: url("\${basePath}/fonts/RDModern-Regular.ttf") format("truetype");
                font-weight: normal;
                font-style: normal;
              }

              @font-face {
                font-family: "RDModern";
                src: url("\${basePath}/fonts/RDModern-SemiBold.ttf") format("truetype");
                font-weight: 600;
                font-style: normal;
              }

              @font-face {
                font-family: "RD Modern";
                src: url("\${basePath}/fonts/RDModern-SemiBoldItalic.ttf") format("truetype");
                font-weight: 600;
                font-style: italic;
              }

              @font-face {
                font-family: "RD Modern";
                src: url("\${basePath}/fonts/RDModern-Thin.ttf") format("truetype");
                font-weight: 100;
                font-style: normal;
              }

              @font-face {
                font-family: "RD Modern";
                src: url("\${basePath}/fonts/RDModern-ThinItalic.ttf") format("truetype");
                font-weight: 100;
                font-style: italic;
              }
            </style>
          \`);
        </script>
      `
  },
}

export default config
