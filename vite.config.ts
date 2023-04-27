import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  plugins: [vue()],
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
})
