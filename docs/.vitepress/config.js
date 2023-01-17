export default {
  themeConfig: {
    siteTitle: 'JiaCheng Docs',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jiacheng-coder/vitepress-blog' },
    ],
    nav: [
      { text: '🫣自我介绍', link: '/index' },
      { text: '🔥TS学习', link: '/ts/', activeMatch: '/ts/' },
      { text: '🔥Vue', link: '/vue3/', activeMatch: '/vue3/' },
      { text: 'Uniapp', link: '/uniapp/', activeMatch: '/uniapp/' },
      { text: '测试', link: '/test/', activeMatch: '/test/' },
      { text: '🌖Team', link: '/team/', activeMatch: '/team/' },
    ],
    sidebar: {
      '/vue3/': [
        {
          text: '起步',
          collapsible: true,
          items: [
            { text: '介绍', link: '/vue3/' },
            { text: '配置', link: '/vue3/one' },
          ]
        },
      ],
      '/ts/': [
        {
          text: 'TS',
          collapsible: true,
          items: [
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
            { text: 'Index', link: '/uniapp/' }, // /guide/index.md
            { text: 'One', link: '/uniapp/one' }, // /guide/one.md
            { text: 'Two', link: '/uniapp/two' } // /guide/two.md
          ]
        }
      ],
      '/test/': [
        {
          text: 'test',
          collapsible: true,
          items: [
            { text: 'Index', link: '/test/' },
            { text: 'One', link: '/test/one' },
            { text: 'Two', link: '/test/two' }
          ]
        }
      ],
    }
  },

}
