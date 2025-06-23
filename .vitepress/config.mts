import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Глобальная Википедия СПм",
  description: "Информация от игроков для игроков",
  lang: "ru-RU",
  base: "/",
  lastUpdated: true,
  cleanUrls: true,
  assetsDir: "assets",
  sitemap: {
    hostname: 'https://wiki.sp-mini.ru/'
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Вернуться к началу',
    langMenuLabel: 'Изменить язык',
    skipToContentLabel: 'Перейти к содержимому',
    outlineTitle: 'На этой странице',
    lastUpdated: {
      text: 'Обновлено',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    editLink: {
      pattern: 'https://github.com/Energy-Project-Team/SPm-wiki/edit/main/src/:path',
      text: 'Редактировать эту страницу на GitHub'
    },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    notFound: {
      title: 'Страница не найдена',
      quote: '',
      linkLabel: 'перейти на главную',
      linkText: 'Главная'
    },

    footer: {
      message: 'Опубликовано под лицензией MIT.',
      copyright: '© 2025 – настоящее время, Energy Project Team'
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'SPworlds',
        collapsed: false,
        items: [
          { text: 'SPworlds', link: '/spworlds/' },
          { text: 'СПм', link: '/spworlds/spm' },
          { text: 'СП', link: '/spworlds/sp' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Energy-Project-Team' }
    ]

    }
  }
)
