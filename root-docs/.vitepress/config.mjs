import { defineConfig } from 'vitepress'
import { links } from '../zo-data/link'
// 引入全局通知组件
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "深岩焰界 | 阿牛宇宙",
  description: "A VitePress Site",
  base: '/zo-start/',
  // base: '/',
  // 关闭深色模式
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: './icon/logo.png' }]
  ],
  themeConfig: {
    logo: '/icon/logo.png',

    nav: [
      { text: 'home', link: '/' },
      // { text: 'details', link: '/intro' },
      { text: 'more', link: '/about' }

    ],



    socialLinks: [
      { icon: 'github', link: 'https://zocv.github.io/zo-start/' },

      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="https://zocv.github.io/zo-notes/icon/png/logo.png"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        }
        ,
        link: ''
      }
    ]
  },
  // 公告插件配置 

  vite: {
    // ↓↓↓↓↓
    plugins: [
      AnnouncementPlugin({
        title: '本站提示',
        body: [
          { type: 'text', content: '站长的能力有限，所以只有本站（zo-start）进行了服务器部署，其它项目都是托管到代码平台，如果你访问其它项目存在问题，' },
        ],
        footer: [
          {
            type: 'text',
            content: '2024-12-19'
          },
          {
            type: 'button',
            content: '在线地址',
            link: 'https://aniu.website'
          },
          {
            type: 'button',
            content: '仓库地址',
            link: '',
            props: {
              type: 'success'
            }
          },
        ],
      })
    ]
    // ↑↑↑↑↑
  }
})
