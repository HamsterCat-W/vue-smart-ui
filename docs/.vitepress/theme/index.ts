import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import SmartUI from '../../../src/entry'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(SmartUI)
  },
}
