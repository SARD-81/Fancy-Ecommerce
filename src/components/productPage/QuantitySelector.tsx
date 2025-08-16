import { Box, Button, Typography } from "@mui/material";

const QuantitySelector = ({ quantity, handleQuantityChange }) => (
    <Box sx={{width:'auto', display: 'flex', alignItems: 'center', border: '1px solid', borderColor: 'grey.300', borderRadius: '9999px', overflow: 'hidden' }}>
        <Button onClick={() => handleQuantityChange('decrease')} sx={{ px: 2, py: 1, color: 'grey.600', minWidth: '40px' }}>-</Button>
        <Typography sx={{ px: 2, py: 1, borderLeft: '1px solid', borderRight: '1px solid', borderColor: 'grey.300' }}>{quantity}</Typography>
        <Button onClick={() => handleQuantityChange('increase')} sx={{ px: 2, py: 1, color: 'grey.600', minWidth: '40px' }}>+</Button>
    </Box>
);
export default QuantitySelector;