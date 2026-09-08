// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  integrations: [
    {
      name: 'development-design-system',
      hooks: {
        'astro:config:setup': ({ command, injectRoute }) => {
          if (command === 'dev') {
            injectRoute({
              pattern: '/dev/design-system',
              entrypoint: './src/dev/DesignSystem.astro',
            });
            injectRoute({
              pattern: '/dev/projects',
              entrypoint: './src/dev/ProjectsIndex.astro',
            });
            injectRoute({
              pattern: '/dev/projects/[...slug]',
              entrypoint: './src/dev/ProjectDetail.astro',
            });
          }
        },
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
