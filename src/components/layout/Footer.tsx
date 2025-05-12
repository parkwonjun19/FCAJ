// src/components/layout/Footer.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: '#f5f5f5' }}>
      <Typography variant="body2">© 2025 My Company</Typography>
    </Box>
  );
}