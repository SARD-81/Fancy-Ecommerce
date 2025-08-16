import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Typography } from "@mui/material";

const ActionButtons = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      width: { xs: "100%", md: "auto" },
    }}
  >
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#42a5f5",
        borderRadius: "9999px",
        flexGrow: 1,
        px: { xs: 2, md: 3 },
        py: 1.2,
        "&:hover": { backgroundColor: "#1976d2" },
      }}
    >
      <ShoppingCartIcon />
      <Typography
        component="span"
        sx={{ display: { xs: "none", sm: "block" }, ml: 1 }}
      >
        Add To Cart
      </Typography>
    </Button>

    <Button
      
      sx={{ p: 1.5, borderRadius: "50%", minWidth: "auto" }}
      aria-label="Add to wishlist"
    >
      <FavoriteBorderIcon />
    </Button>
  </Box>
);
export default ActionButtons;
