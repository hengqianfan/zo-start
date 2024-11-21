import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "阿牛的世界",
  description: "A VitePress Site",
  base: '/zo-start/',
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: 'details', link: '/intro' }

    ],



    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
