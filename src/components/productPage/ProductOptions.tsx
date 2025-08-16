import { Box, Button, Typography } from "@mui/material";

const ProductOptions = ({ options, selectedOptions, handleOptionChange }) => (
    <>
        {options.map(option => (
            <Box key={option.name} sx={{ mt: 3 }}>
                <Typography sx={{ fontWeight: 'bold' }}>{option.name}</Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
                    {option.values.map(value => (
                        <Button
                            key={value}
                            onClick={() => handleOptionChange(option.name, value)}
                            variant={selectedOptions[option.name] === value ? 'contained' : 'outlined'}
                            sx={{ borderRadius: '9999px', textTransform: 'none' }}
                        >
                            {value}
                        </Button>
                    ))}
                </Box>
            </Box>
        ))}
    </>
);
export default ProductOptions;