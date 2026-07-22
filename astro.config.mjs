import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://anshumanblogs.github.io',
  base: '/',
  trailingSlash: 'never',
  output: 'static',
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  markdown: {
    // 👇 These plugins are for .md files (they were missing!)
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});