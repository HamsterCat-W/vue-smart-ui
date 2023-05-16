import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
import * as path from 'path'

const lessVarPath = path.resolve(__dirname, '../src/styles/var.less')
console.log('🚀 ~ file: vite.config.ts:8 ~ lessVarPath:', lessVarPath)

export default defineConfig({
  plugins: [unocss()],
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: {},
        additionalData: `@import "${lessVarPath}";`,
        javascriptEnabled: true,
      },
    },
  },
})
