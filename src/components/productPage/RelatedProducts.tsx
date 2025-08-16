import { Box, Container, Typography } from "@mui/material";
import ProductCard from "../productPage/ProductCard";
import type { ProductResponse } from "../../types/product";



interface IProductCardProps {
  product: ProductResponse;

}

const RelatedProducts = ({ products }:IProductCardProps) => (
    <Box component="section" sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4 , fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Explore <Box component="span" sx={{ color: '#42a5f5' }}>Related Products</Box>
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 3 }}>
                {products.map(product => <ProductCard key={product._id} product={product} />)}
            </Box>
        </Container>
    </Box>
);
export default RelatedProducts;
