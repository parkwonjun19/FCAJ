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
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

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
  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme1}>    
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/Main" element={<MainPage />} />
            <Route path="/sub1" element={<Sub1Page />} />
            <Route path="/sub2" element={<Sub2Page />} />
            <Route path="/sub3" element={<Sub3Page />} />
            <Route path="/sub4" element={<Sub4Page />} />
            <Route path="/sub5" element={<Sub5Page />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;