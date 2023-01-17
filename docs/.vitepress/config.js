export default {
  themeConfig: {
    siteTitle: 'JiaCheng Docs',
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/zhujiacheng612' },
    ],
    nav: [
      { text: '介绍', link: '/index' },
      { text: 'TS', link: '/ts/', activeMatch: '/ts/' },
      { text: 'Vue3', link: '/vue3/', activeMatch: '/vue3/' },
      { text: 'Uniapp', link: '/uniapp/', activeMatch: '/uniapp/' },
      { text: 'Team', link: '/team/', activeMatch: '/team/' },
    ],
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/vue3/': [
        {
          text: 'Vue3',
          collapsible: true,
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Index', link: '/vue3/' }, // /guide/index.md
            { text: 'One', link: '/vue3/one' }, // /guide/one.md
            { text: 'Two', link: '/vue3/two' } // /guide/two.md
          ]
        }
      ],
      '/ts/': [
        {
          text: 'TS',
          collapsible: true,
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Index', link: '/ts/' }, // /guide/index.md
            { text: 'One', link: '/ts/one' }, // /guide/one.md
            { text: 'Two', link: '/ts/two' } // /guide/two.md
          ]
        }
      ],
      '/uniapp/': [
        {
          text: 'uniapp',
          collapsible: true,
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Index', link: '/uniapp/' }, // /guide/index.md
            { text: 'One', link: '/uniapp/one' }, // /guide/one.md
            { text: 'Two', link: '/uniapp/two' } // /guide/two.md
          ]
        }
      ],
    }
  },

}
