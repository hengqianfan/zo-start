import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "深岩焰界 | 阿牛宇宙",
  description: "A VitePress Site",
  base: '/zo-start/',
  // 关闭深色模式
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: './icon/logo.png' }]
  ],
  themeConfig: {
    logo: '/icon/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'details', link: '/intro' }

    ],



    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
