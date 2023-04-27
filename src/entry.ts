import { App } from 'vue'

import SButton from './components/button.vue'

// 按需导入
export { SButton }

// 全部导入
export default {
  install(app: App): void {
    app.component(SButton.name, SButton)
  },
}
