// src/App.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import Sub1Page from './pages/Sub1Page';
import Sub2Page from './pages/Sub2Page';
import Sub3Page from './pages/Sub3Page';
import Sub4Page from './pages/Sub4Page';
import Sub5Page from './pages/Sub5Page';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles/global.css';

// 여러 테마 예시 (필요에 따라 동적으로 바꿀 수도 있음)
const theme1 = createTheme({
  palette: {
    primary: { main: '#2a9461' },
    secondary: { main: '#494c7d' },
  },
});
const theme2 = createTheme({
  palette: {
    primary: { main: '#df2b5b' },
    secondary: { main: '#3b5998' },
  },
});

function App() {
  // 동적 테마 변경이 필요하면 useState로 관리
  // const [theme, setTheme] = React.useState(theme1);

  return (
    // ThemeProvider: 앱 전체에 MUI 테마를 적용
    <ThemeProvider theme={theme1}>
      {/* CssBaseline: 브라우저별 기본 CSS를 초기화 (reset) */}
      <CssBaseline />
      {/* BrowserRouter: 리액트 라우터의 SPA 내비게이션 컨텍스트 제공 */}
      <BrowserRouter>
        {/* Layout: Header, Footer, Container 등 공통 레이아웃 적용 */}
        <Layout>
          {/* Routes: URL 경로에 따라 해당 컴포넌트 렌더링 */}
          <Routes>
            {/* Route: 각 페이지 경로와 컴포넌트 연결 */}
            <Route path="/" element={<MainPage />} />
            <Route path="/sub1" element={<Sub1Page />} />
            <Route path="/sub2" element={<Sub2Page />} />
            <Route path="/sub3" element={<Sub3Page />} />
            <Route path="/sub4" element={<Sub4Page />} />
            <Route path="/sub5" element={<Sub5Page />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
