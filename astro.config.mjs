import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';  

export default defineConfig({
  site: 'https://anshumanblogs.github.io',
  base: '/',
  trailingSlash: 'never',
  output: 'static',
  integrations: [
    mdx({
      remarkPlugins: [remarkMath, remarkGfm],  
      rehypePlugins: [rehypeKatex],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkGfm], 
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});