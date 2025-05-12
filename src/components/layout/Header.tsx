import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

const menuItems = [
  { label: 'MainPage', path: '/Main' },
  { label: 'Sub1', path: '/sub1' },
  { label: 'Sub2', path: '/sub2' },
  { label: 'Sub3', path: '/sub3' },
  { label: 'Sub4', path: '/sub4' },
  { label: 'Sub5', path: '/sub5' },
];

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.path}
                component={RouterLink}
                to={item.path}
                onClick={handleMenuClose}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }