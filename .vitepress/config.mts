import { defineConfig } from "vitepress"

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
    hostname: "https://wiki.sp-mini.ru/"
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    darkModeSwitchLabel: "Оформление",
    lightModeSwitchTitle: "Переключить на светлую тему",
    darkModeSwitchTitle: "Переключить на тёмную тему",
    sidebarMenuLabel: "Меню",
    returnToTopLabel: "Вернуться к началу",
    langMenuLabel: "Изменить язык",
    skipToContentLabel: "Перейти к содержимому",
    outlineTitle: "На этой странице",
    lastUpdated: {
      text: "Обновлено",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short"
      }
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Поиск",
                buttonAriaLabel: "Поиск"
              },
              modal: {
                displayDetails: "Отобразить подробный список",
                resetButtonTitle: "Сбросить поиск",
                backButtonTitle: "Закрыть поиск",
                noResultsText: "Нет результатов по запросу",
                footer: {
                  selectText: "выбрать",
                  selectKeyAriaLabel: "выбрать",
                  navigateText: "перейти",
                  navigateUpKeyAriaLabel: "стрелка вверх",
                  navigateDownKeyAriaLabel: "стрелка вниз",
                  closeText: "закрыть",
                  closeKeyAriaLabel: "esc"
                }
              }
            }
          }
        }
      }
    },
    editLink: {
      pattern: "https://github.com/Energy-Project-Team/SPm-wiki/edit/main/src/:path",
      text: "Редактировать эту страницу на GitHub"
    },
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница"
    },

    notFound: {
      title: "Страница не найдена",
      quote: "",
      linkLabel: "перейти на главную",
      linkText: "Главная"
    },

    footer: {
      message: "Опубликовано под лицензией MIT.",
      copyright: "© 2025 – настоящее время, Energy Project Team"
    },
    
    nav: [
      { text: "Главная", link: "/" },
      { text: "Начало", link: "/start/introduction" }
    ],

    sidebar: [
      {
        text: "👋 Начало",
        collapsed: false,
        base: "/start",
        items: [
          { text: "📘 Введение", link: "/introduction" },
          { text: "🎮 Модпак", link: "/modpack" },
        ]
      },
      {
        text: "🎲 Игровые механики",
        collapsed: false,
        base: "/game-mechanics",
        items: [
          { text: "🔧 Ядро серера", link: "/core" },
          { text: "📃 Подпись предмета", link: "/sign-item" },
          { text: "📥 Загрузка РП", link: "/uploading-rp" },
          { text: "🔐 Другое", link: "/other" }
        ]
      },
      {
        text: "❓ Ответы на вопросы",
        collapsed: true,
        base: "/faq",
        items: [
          { text: "🔢 IP", link: "/ip" },
          { text: "📄 WhiteList", link: "/whitelist" }
        ]
      },
      {
        text: "👥 Важные люди",
        collapsed: false,
        base: "/important-people",
        items: [
          { text: "👮‍♂️ Администрация", link: "/administration" },
          { text: "💼 Состав правительства", link: "/gov-composition" },
        ]
      },
      {
        text: "📜 Законодательство",
        collapsed: true,
        base: "/law",
        items: [
          { text: "🗺️ Система территорий", link: "/territory-system" },
          { text: "⚖️ Судебная система", link: "/judicial-system" },
          { 
            text: "📑 МинЮст", 
            base: "/ministry-of-justice",
            collapsed: true,
            items: [
              { text: "🪪 Закон “О Нормативно-правовых актах”", link: "/law-on-regulatory-legal-acts" },
              { text: "🧑‍⚖️ Закон “О Министерстве Юстиции”", link: "/law-on-the-ministry-of-justice" },
            ]
          },
          { 
            text: "🏦 Банк", 
            base: "/bank",
            collapsed: true,
            items: [
              { text: "🔖 Правила банка", link: "/bank-rules" },
              { text: "👤 Устав банкиров", link: "/bankers-сharter" },
              { text: "💸 О Регулировании Инвойсов", link: "/invoice-regulation" }
            ]
          },
          { 
            text: "💰 Казначейство", 
            base: "/treasury",
            collapsed: true,
            items: [
              { text: "📉 Налогооблажение частных рынков", link: "/taxation-of-private-markets" },
              { text: "🎰 Регулирование игорного бизнеса", link: "/gambling-business-regulation" },
              { text: "🚫 Отмена налогообложения онлайн предприятий", link: "/abolition-of-taxation-of-online-businesses" },
            ]
          },
          { 
            text: "📋 Правила измерений", 
            base: "/worlds-rules",
            collapsed: true,
            items: [
              { text: "🌏 Спавн", link: "/spawn" },
              { text: "♨️ Ад (Нижний мир)", link: "/nether" },
              { text: "🔒 Энд", link: "/end" },
            ]
          },
          { text: "📛 Устав ФСБ", link: "/fsb-charter"},
          { text: "🧭 Устав Гидов", link: "/guide-charter"},
          { text: "🛑 Агитация во время выборов", link: "/agitation"}
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Energy-Project-Team" }
    ]

    }
  }
)
