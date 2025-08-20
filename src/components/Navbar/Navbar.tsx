import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  styled,
  useTheme,
  IconButton,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import MobileDrawer from "./MobileDrawer";
import AnimatedArrow from "./AnimatedArrow";
import DashboardDropdown from "./DashboardDropdown";
import LanguageSelector from "./LanguageSelector";
import SearchInput from "./SearchInput";

{
  /* Styled components for hover animations */
}

const HoverAnimatedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "none",
  position: "relative",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: "transparent",
    "&::after": {
      transform: "scaleX(1)",
    },
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "16px",
    right: "16px",
    height: "2px",
    backgroundColor: blue[400],
    transform: "scaleX(0)",
    transformOrigin: "center",
    transition: "transform 0.3s ease",
  },
}));

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [productsAnchorEl, setProductsAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [categoriesAnchorEl, setCategoriesAnchorEl] =
    useState<null | HTMLElement>(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("ENG");
  const theme = useTheme();

  {
    /* Desktop menu handlers */
  }
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProductsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProductsAnchorEl(event.currentTarget);
  };

  const handleCategoriesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setCategoriesAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setProductsAnchorEl(null);
    setCategoriesAnchorEl(null);
    setLanguageAnchorEl(null);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    handleMenuClose();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleMenuClose();
  };

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    handleMenuClose();
  };

  {
    /* Mobile drawer handlers */
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", mb: "64px" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: theme.palette.text.primary,
          boxShadow: "none",
          borderBottom: `1px solid ${theme.palette.divider}`,
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo and hamburger menu */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" }, color: blue[400] }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{
                color: blue[400],
                fontWeight: "bold",
                mr: 4,
              }}
            >
              LOGO
            </Typography>

            {/* Desktop navigation items */}
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <HoverAnimatedButton>HOME</HoverAnimatedButton>
              {/* Products dropdown */}
              <Button
                onClick={handleProductsMenuOpen}
                endIcon={<AnimatedArrow open={Boolean(productsAnchorEl)} />}
                sx={{
                  color: theme.palette.text.primary,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: blue[50],
                  },
                }}
              >
                Products
              </Button>

              <Menu
                anchorEl={productsAnchorEl}
                open={Boolean(productsAnchorEl)}
                onClose={handleMenuClose}
                TransitionProps={{ timeout: 200 }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    mt: 1,
                    minWidth: 250,
                    borderRadius: 2,
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    "& .MuiMenuItem-root": {
                      py: 1.5,
                      "&:hover": {
                        backgroundColor: blue[50],
                      },
                    },
                  },
                }}
              >
                <MenuItem onClick={handleMenuClose}>
                  <ListItemText primary="Case Studies" />
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <ListItemText
                    primary="Headspace"
                    secondary="Creating moments of joy and mindfulness"
                  />
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <ListItemText
                    primary="Gojek"
                    secondary="Warm and personal user experiences"
                  />
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <ListItemText
                    primary="DisneyNOW"
                    secondary="Dynamic app experience"
                  />
                </MenuItem>
              </Menu>

              {/* Categories dropdown */}
              <Button
                onClick={handleCategoriesMenuOpen}
                endIcon={<AnimatedArrow open={Boolean(categoriesAnchorEl)} />}
                sx={{
                  color: theme.palette.text.primary,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: blue[50],
                  },
                }}
              >
                Categories
              </Button>
              <Menu
                anchorEl={categoriesAnchorEl}
                open={Boolean(categoriesAnchorEl)}
                onClose={handleMenuClose}
                TransitionProps={{ timeout: 200 }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    mt: 1,
                    minWidth: 200,
                    borderRadius: 2,
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    "& .MuiMenuItem-root": {
                      py: 1.5,
                      "&:hover": {
                        backgroundColor: blue[50],
                      },
                    },
                  },
                }}
              >
                <MenuItem onClick={handleMenuClose}>Animations</MenuItem>
                <MenuItem onClick={handleMenuClose}>Templates</MenuItem>
                <MenuItem onClick={handleMenuClose}>Icons</MenuItem>
                <MenuItem onClick={handleMenuClose}>Illustrations</MenuItem>
              </Menu>

              <HoverAnimatedButton>Customers</HoverAnimatedButton>
              <HoverAnimatedButton>Pricing</HoverAnimatedButton>
              <HoverAnimatedButton>SHOP</HoverAnimatedButton>
            </Box>
          </Box>
          <SearchInput />
          {/*  Dashboard dropdown and language */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* Dashboard dropdown */}

            <DashboardDropdown
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              handleMenuClose={handleMenuClose}
              handleMenuOpen={handleMenuOpen}
              isLoggedIn={isLoggedIn}
              anchorEl={anchorEl}
            />

            {/* Language selector */}

            <LanguageSelector
              languageAnchorEl={languageAnchorEl}
              handleLanguageMenuOpen={handleLanguageMenuOpen}
              selectedLanguage={selectedLanguage}
              handleLanguageSelect={handleLanguageSelect}
              handleMenuClose={handleMenuClose}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <MobileDrawer
        mobileOpen={mobileOpen}
        onDrawerToggle={handleDrawerToggle}
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        handleLanguageSelect={handleLanguageSelect}
        handleMenuOpen={handleMenuOpen}
        selectedLanguage={selectedLanguage}
      />
    </Box>
  );
};

export default Navbar;
