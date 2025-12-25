import { defineConfig } from 'vitepress'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nick's Website",
  description: "My Engineering Portfolio.",
  base: '/portfolio/', // TODO: Comment this out before deploying to aws.
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/root/who-am-i' },
      { text: 'Portfolio', link: '/portfolio/' } // TODO: Change Link
    ],

    sidebar: [
      { text: 'About Me', link: '/root/who-am-i', items: [ 
        { text: 'Experience', link: '/root/experience' },
        { text: 'Organizations', link: '/root/organizations' },
        { text: 'Competitions', link: '/root/competitions'},
        { text: 'Certifications', link: '/root/certifications'}
      ]},
      {
        text: 'Portfolio', link: '/portfolio/',
        items: [
          { text: 'Engineering', 
            items: [ 
              { text: 'Agila', link: '/engineering/dyson' },
              { text: 'Table Top Wind Turbine', link: '/engineering/table_top_wind_turbine' }
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
  },
  vite: {
    plugins: [ViteImageOptimizer({
        jpg: { quality: 80 },
        png: { quality: 50 },
        webp: { quality: 75 },
      })]
  }
})