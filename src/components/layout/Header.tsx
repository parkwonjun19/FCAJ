import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// 메뉴 항목 배열: label은 표시 이름, path는 이동 경로
const menuItems = [
  { label: 'Sub1', path: '/sub1' },
  { label: 'Sub2', path: '/sub2' },
  { label: 'Sub3', path: '/sub3' },
  { label: 'Sub4', path: '/sub4' },
  { label: 'Sub5', path: '/sub5' },
];

export default function Header() {
  // Drawer(풀팝업 메뉴)의 열림/닫힘 상태 관리
  const [open, setOpen] = React.useState(false);

  // 햄버거 메뉴 클릭 시 Drawer 오픈
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // X 버튼 또는 바깥 클릭 시 Drawer 닫힘
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* 상단 네비게이션 바 (항상 고정) */}
      <AppBar position="static">
        <Toolbar>
          {/* 좌측: 로고(클릭 시 메인 페이지로 이동) */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link
              component={RouterLink} // react-router-dom의 Link로 연결
              to="/"
              color="inherit"
              underline="none"
              sx={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              My App
            </Link>
          </Typography>
          {/* 우측: 햄버거 메뉴 버튼 (Drawer 오픈 트리거) */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* 풀팝업 Drawer (상단에서 아래로, 전체 화면 덮음) */}
      <Drawer
        anchor="top"
        open={open}
        onClose={handleDrawerClose}
        PaperProps={{
          // Drawer가 전체 화면을 덮도록 설정
          sx: { height: '100vh', position: 'relative' }
        }}
      >
        {/* 우측 상단 X(닫기) 버튼 - Drawer 내부에 절대 위치로 배치 */}
        <IconButton
          onClick={handleDrawerClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 10, // 메뉴 리스트 위에 항상 보이도록
          }}
          aria-label="close"
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        {/* 메뉴 리스트 (중앙 정렬, 메뉴 클릭 시 Drawer 닫힘과 동시에 이동) */}
        <List
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            pt: 6, // X 버튼과 겹치지 않게 상단 패딩
          }}
        >
          {menuItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={RouterLink} // 각 메뉴를 SPA 내비게이션으로 연결
                to={item.path}
                onClick={handleDrawerClose} // 메뉴 클릭 시 Drawer 닫힘
                sx={{ justifyContent: 'center', py: 3 }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ align: 'center', variant: 'h5' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
