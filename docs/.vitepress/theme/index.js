// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './style.css'
// Import the styles
import '@nolebase/vitepress-plugin-page-properties/client/style.css'

export default {
  ...DefaultTheme
}