import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true, // 이 부분이 브라우저 자동 오픈을 담당
  },
  plugins: [react()],
})
