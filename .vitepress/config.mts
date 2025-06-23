import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Глобальная Википедия СПм",
  description: "Информация от игроков для игроков",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'SPworlds',
        collapsed: false,
        items: [
          { text: 'SPworlds', link: '/wiki/spworlds/index' },
          { text: 'СПм', link: '/wiki/spworlds/spm' },
          { text: 'СП', link: '/wiki/spworlds/sp' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
