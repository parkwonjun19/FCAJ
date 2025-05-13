// src/components/layout/Layout.tsx

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from '@mui/material/Container';

/**
 * Layout 컴포넌트는 페이지 전체의 공통 구조(헤더, 푸터, 메인 컨텐츠)를 담당합니다.
 * - Header: 상단 네비게이션 바 (공통)
 * - Container: 메인 컨텐츠 영역 (children이 들어감)
 * - Footer: 하단 푸터 (공통)
 * 
 * Container의 minHeight를 조정해 Footer가 항상 하단에 위치하도록 합니다.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          minHeight: 'calc(100vh - 128px)', // 헤더(64px)+푸터(64px) 높이만큼 빼기
          py: 4, // 상하 여백
        }}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}
