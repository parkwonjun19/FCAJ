// src/pages/Sub2Page.tsx

import React from 'react';
import { Container, Typography, Button } from '@mui/material';

/**
 * Sub2Page 컴포넌트는 /sub2 경로에서 보여질 페이지입니다.
 * MUI의 Container, Typography, Button을 활용해 간단한 서브 페이지 레이아웃을 구성합니다.
 */
export default function Sub2Page() {
  return (
    <Container sx={{ py: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Sub2 페이지
      </Typography>
      <Typography variant="body1" gutterBottom>
        이곳은 Sub2 페이지입니다.  
        다양한 MUI 컴포넌트와 스타일을 자유롭게 추가할 수 있습니다.
      </Typography>
      <Button variant="contained" color="primary">
        Sub2 액션 버튼
      </Button>
    </Container>
  );
}
