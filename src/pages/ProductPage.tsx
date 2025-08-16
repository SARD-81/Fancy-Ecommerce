import { Box, Container, Typography } from "@mui/material";
import ProductSection from "../components/productPage/ProductSection";
import ProductDescription from "../components/productPage/ProductDescription";
import RelatedProducts from "../components/productPage/RelatedProducts";
import Services from "../components/productPage/Services";
import { useRef, useState } from "react";

export default function ProductPage() {
  const [activeImage, setActiveImage] = useState('https://placehold.co/500x500/E8E9F3/414459?text=Product+Image');
  const [activeTab, setActiveTab] = useState('Description');
  const [userSubmittedRating, setUserSubmittedRating] = useState(null);
  const reviewsRef = useRef(null);

  //  Mock data for the product to populate the UI.
  const productData = {
    category: 'Skin Care',
    name: 'SilkSkin Serum',
    status: 'In Stock',
    rating: 4.8,
    reviews: 245,
    price: 60.00,
    salePrice: 48.00,
    description: 'A revitalizing serum that boosts radiance and hydration. Formulated with Vitamin C and Hyaluronic Acid to brighten and smooth the skin.',
    sku: 'ORFRB564BHQJ',
    tags: ['Skincare', 'Serum', 'Vitamin C'],
    images: [
      'https://placehold.co/500x500/E8E9F3/414459?text=Image1',
      'https://placehold.co/100x100/E8E9F3/414459?text=Image+2',
      'https://placehold.co/100x100/E8E9F3/414459?text=Image+3',
      'https://placehold.co/100x100/E8E9F3/414459?text=Image+4',
      'https://placehold.co/100x100/E8E9F3/414459?text=Image+5',
    ],
    options: [{ name: 'Size/Volume', values: ['30 ml', '60ml', '80ml', '100ml'] }],
  };

  // Mock data for related products
  const relatedProducts = [
    { id: 1, image: 'https://placehold.co/200x200/F1E9DA/414459?text=Product+A', category: 'Skin Care', name: 'SilkSculpt Serum', rating: 4.9, price: 70.00, salePrice: 35.00 },
    { id: 2, image: 'https://placehold.co/200x200/E8E9F3/414459?text=Product+B', category: 'Skin Care', name: 'HydraLuxe Serum', rating: 4.9, price: 40.00, salePrice: 20.00 },
    { id: 3, image: 'https://placehold.co/200x200/F4DCD1/414459?text=Product+C', category: 'Skin Care', name: 'OceanMist Moisturizer', rating: 4.8, price: 40.00, salePrice: 20.00 },
    { id: 4, image: 'https://placehold.co/200x200/E5E8F3/414459?text=Product+D', category: 'Skin Care', name: 'BrightenEye Cream', rating: 4.7, price: 45.00, salePrice: 20.00 },
  ];

  // A handler function to smoothly scroll to the reviews section.
  const handleReviewsClick = () => {
    setActiveTab('Review');
    setTimeout(() => {
        if (reviewsRef.current) {
            reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  return (
    <Box sx={{ fontFamily: 'sans-serif', WebkitFontSmoothing: 'antialiased', color: 'grey.800' }}>
      <Box component="main">
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" color="text.secondary">Home / Shop / Product Details</Typography>
        </Container>
        <ProductSection
          productData={productData}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          onReviewsClick={handleReviewsClick}
          userRating={userSubmittedRating}
        />
        <ProductDescription
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onRatingChange={setUserSubmittedRating}
          reviewsRef={reviewsRef}
        />
        <RelatedProducts products={relatedProducts} />
        <Services />
      </Box>
      <Box component="footer" sx={{ backgroundColor: 'grey.800', color: 'white', textAlign: 'center', py: 2, mt: 4 }}>
        <Typography>&copy; 2025 E-commerce All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
}
