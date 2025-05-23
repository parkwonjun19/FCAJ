import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true, // 이 부분이 브라우저 자동 오픈을 담당
  },
  plugins: [react()],
  base: '/FCAJ/', // GitHub 저장소 이름으로 변경 repository name (예: '/my-vite-app/')
})
