import { Box } from '@mui/material';

const AnimatedArrow = ({ open }: { open: boolean }) => (
  <Box
    sx={{
      display: 'inline-flex',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      marginLeft: '4px'
    }}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </Box>
);

export default AnimatedArrow;