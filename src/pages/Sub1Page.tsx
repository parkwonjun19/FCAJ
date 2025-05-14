// src/pages/Sub1Page.tsx

// import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabSlider from '../components/TabSlider';

/**
 * Sub1Page 컴포넌트는 /sub1 경로에서 보여질 페이지입니다.
 * MUI의 Box와 Typography를 활용해 간단한 서브 페이지 레이아웃을 구성합니다.
 */
export default function Sub1Page() {
  return (
    <Box sx={{ py: 4, textAlign: 'center' }}>

      <TabSlider />
      
      <Typography variant="h4" gutterBottom>
        Sub1 페이지
      </Typography>
      <Typography variant="body1">
        이곳은 Sub1 페이지입니다.  
        원하는 내용을 자유롭게 추가하세요.
      </Typography>
    </Box>
  );
}
