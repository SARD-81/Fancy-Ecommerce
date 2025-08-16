import { Box, Container, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { CreditCard, Headset } from "@mui/icons-material";

const Services = () => (
  <Container maxWidth="lg" sx={{ py: 4 }}>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: 3,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: {xs:"#42a5f5",md:"white"},
          p: 3,
          borderRadius: "8px",
          boxShadow: 2,
        }}
      >
        <LocalShippingIcon style={{ marginBottom: "16px"}} sx={{color:{xs:'black',md:'gray'}}} />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Free Shipping
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Free shipping for order above $50
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: {xs:"#42a5f5",md:"white"},
          p: 3,
          borderRadius: "8px",
          boxShadow: 2,
        }}
      >
        <CreditCard style={{ marginBottom: "16px"}}  sx={{color:{xs:'black',md:'gray'}}}/>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Flexible Payment
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Multiple secure payment options
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: {xs:"#42a5f5",md:"white"},
          p: 3,
          borderRadius: "8px",
          boxShadow: 2,
        }}
      >
        <Headset style={{ marginBottom: "16px"}}  sx={{color:{xs:'black',md:'gray'}}} />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          24x7 Support
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We support online all days.
        </Typography>
      </Box>
    </Box>
  </Container>
);

export default Services;
