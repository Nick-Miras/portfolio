import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nick's Website",
  description: "My Engineering Portfolio.",
  base: "/portfolio/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/root/who-am-i' },
      { text: 'Portfolio', link: '/portfolio/' } // TODO: Change Link
    ],

    sidebar: [
      { text: 'About Me', items: [ 
        { text: 'About Me', link: '/root/who-am-i' },
        { text: 'Experience', link: '/root/experience' },
        { text: 'Organizations', link: '/root/organizations' },
        { text: 'Competitions', link: '/root/competitions'},
        { text: 'Certifications', link: '/root/certifications'}
      ]},
      {
        text: 'Portfolio',
        items: [
          { text: 'Engineering', 
            items: [ 
              { text: 'Agila', link: '/engineering/dyson' }
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nick-Miras' }
    ]
  },
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  }
})