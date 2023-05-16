import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// 原子样式插件引入
import Unocss from 'unocss/vite'
// 使用系统预设，按需引入
import { presetUno, presetAttributify, presetIcons } from 'unocss'

const lessVarPath = path.resolve('./src/styles/var.less')

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'smartyUi',
      // 导出格式
      formats: ['es', 'umd', 'iife'],
    },
  },
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
