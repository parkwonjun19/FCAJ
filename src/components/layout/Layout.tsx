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
        className="Container"      
        maxWidth="lg" 
        // MUI(Material UI)의 Container 컴포넌트에서 컨테이너의 최대 너비를 "large" 브레이크포인트(기본 1200px)로 제한하는 속성
        // breakpoint별 값
        // xs: 100% (모바일, <600px)
        // sm: 600px
        // md: 960px
        // lg: 1200px
        // xl: 1536px
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}
