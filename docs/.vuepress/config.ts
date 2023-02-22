import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Summer',
  description: 'Summer 项目文档',
  base: '/summer-docs/',
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon.ico' }]
  ],
  theme: defaultTheme({
    logo: '/images/logo.jpg',
  })
})
