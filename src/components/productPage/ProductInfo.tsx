import { Box, Rating, Typography } from "@mui/material";

const ProductInfo = ({ productData, userRating, onReviewsClick }) => (
    <Box>
        <Typography variant="body2" color="text.secondary">{productData.category}</Typography>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mt: 1, lineHeight: 1.2 ,fontSize:{xs:'1.75rem',md:'2rem'}}}>{productData.name}</Typography>
        <Box component="span" sx={{ display: 'inline-block', px: 1.5, py: 0.5, mt: 1, fontSize: '0.875rem', fontWeight: 'bold', color: 'green.700', backgroundColor: 'green.100', borderRadius: '9999px' }}>
            {productData.status}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <Rating name="read-only" value={userRating ?? productData.rating} precision={0.1} readOnly />
            <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }} onClick={onReviewsClick}>
                ({productData.reviews} Reviews)
            </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
            <Typography component="span" variant="h5" sx={{ fontWeight: 'bold' }}>${productData.salePrice.toFixed(2)}</Typography>
            <Typography component="span" variant="body1" sx={{ color: 'text.disabled', textDecoration: 'line-through', ml: 1 }}>${productData.price.toFixed(2)}</Typography>
        </Box>
        <Typography sx={{ mt: 2, color: 'text.secondary', lineHeight: '1.6' }}>{productData.description}</Typography>
    </Box>
);
export default ProductInfo;