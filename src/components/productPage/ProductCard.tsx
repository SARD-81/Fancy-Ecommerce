import { Box, Rating, Typography } from "@mui/material";
import type { ProductResponse } from "../../types/product";

interface IProductCardProps {
  product: ProductResponse;

}

const ProductCard = ({ product }: IProductCardProps) => (
  <Box sx={{cursor:"pointer", backgroundColor: 'white', borderRadius: '8px', boxShadow: 2, overflow: 'hidden', '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }, transition: 'transform 0.3s' }}>
        <Box sx={{ position: 'relative' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', objectFit: 'cover', aspectRatio: '1/1' }} />
            <Box component="span" sx={{ position: 'absolute', top: '8px', left: '8px', px: 1, py: 0.5, backgroundColor: 'red', color: 'white', fontSize: '0.75rem', fontWeight: 'bold', borderRadius: '9999px' }}>
                50% off
            </Box>
        </Box>
        <Box sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">{product.category.name}</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 0.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.name}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1, gap: 0.5 }}>
                <Rating value={product.rating} precision={0.1} readOnly size="small" />
                <Typography variant="caption">({product.rating})</Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography component="span" variant="body1" sx={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</Typography>
                <Typography component="span" variant="body2" sx={{ color: 'text.disabled', textDecoration: 'line-through', ml: 1 }}>${product.price.toFixed(2)}</Typography>
            </Box>
        </Box>
    </Box>
);
export default ProductCard;
