// src/components/layout/Footer.tsx

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    // Box: MUI의 레이아웃 컴포넌트로, footer 영역을 감싸고 스타일을 적용합니다.
    <Box
      component="footer"
      sx={{
        py: 3, // 상하 패딩
        px: 2, // 좌우 패딩
        mt: 'auto', // flex 레이아웃에서 Footer를 하단에 고정
        backgroundColor: (theme) =>
          // 라이트/다크 모드에 따라 배경색을 다르게 지정
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        textAlign: 'center', // 텍스트 중앙 정렬
      }}
    >
      {/* Typography: 텍스트 스타일을 일관되게 적용하는 MUI 컴포넌트 */}
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        {/* Link: 회사명에 하이퍼링크를 추가합니다. 필요 없으면 삭제 가능 */}
        <Link color="inherit" href="https://your-website.com/">
          My Company
        </Link>{' '}
        {/* new Date().getFullYear()를 사용해 연도가 자동으로 갱신됩니다 */}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}
