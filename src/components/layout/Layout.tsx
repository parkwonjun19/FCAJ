// src/components/layout/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from '@mui/material/Container';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container className="abcde" sx={{ padding: 1, backgroundColor: 'pink', borderRadius: 1 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}