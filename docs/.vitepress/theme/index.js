import DefaultTheme from 'vitepress/theme'
import HeroLayout from './HeroLayout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: HeroLayout
}
