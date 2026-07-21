import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://anshumanblogs.github.io',
  base: '/',
  trailingSlash: 'never',
  output: 'static',
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false })
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    }
  }
});
