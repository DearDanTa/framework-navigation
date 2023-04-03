import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 配置调试服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    host: '0.0.0.0',
    port: 14000, // 服务器端口号
    cors: true // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
  },
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      '@': path.resolve(__dirname, 'src')
    }
  },
})
