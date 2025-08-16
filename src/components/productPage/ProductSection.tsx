import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import ProductOptions from './ProductOptions';
import QuantitySelector from './QuantitySelector';
import ActionButtons from './ActionButtons';

const ProductSection = ({ productData, activeImage, setActiveImage, onReviewsClick, userRating }) => {
    const [quantity, setQuantity] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({ 'Size/Volume': '30 ml' });

    const handleQuantityChange = (type) => {
        setQuantity(prev => type === 'increase' ? prev + 1 : Math.max(0, prev - 1));
    };

    const handleOptionChange = (name, value) => {
        setSelectedOptions(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 4 }}>
                    <ImageGallery
                        images={productData.images}
                        activeImage={activeImage}
                        setActiveImage={setActiveImage}
                        productName={productData.name}
                    />
                    <Box>
                        <ProductInfo
                            productData={productData}
                            userRating={userRating}
                            onReviewsClick={onReviewsClick}
                        />
                        <ProductOptions
                            options={productData.options}
                            selectedOptions={selectedOptions}
                            handleOptionChange={handleOptionChange}
                        />
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 2, mt: 3 }}>
                            <QuantitySelector quantity={quantity} handleQuantityChange={handleQuantityChange} />
                            <ActionButtons />
                        </Box>
                        <Box sx={{ mt: 4, fontSize: '0.875rem', color: 'grey.500' }}>
                            <Typography>SKU: <Typography component="span" sx={{ color: 'grey.800', fontWeight: 'bold' }}>{productData.sku}</Typography></Typography>
                            <Typography>Tags: <Typography component="span" sx={{ color: 'grey.800', fontWeight: 'bold' }}>{productData.tags.join(', ')}</Typography></Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
export default ProductSection;