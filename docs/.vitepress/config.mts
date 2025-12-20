import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nick's Portfolio",
  description: "My Engineering Portfolio.",
  base: "/portfolio/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/root/who-am-i' },
      { text: 'Portfolio', link: '/markdown-examples' } // TODO: Change Link
    ],

    sidebar: [
      { text: 'About Me', items: [ 
        { text: 'About Me', link: '/root/who-am-i' },
        { text: 'Experience', link: '/root/experience' },
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
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nick-Miras' }
    ]
  }
})