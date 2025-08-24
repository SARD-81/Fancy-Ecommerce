// import { Person, ShoppingBag, Favorite, ExitToApp } from "@mui/icons-material";
// import {
//   Box,
//   Collapse,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
// } from "@mui/material";
// import { blue } from "@mui/material/colors";
// import AnimatedArrow from "./AnimatedArrow";
// import { useState } from "react";

// interface MobileDrawerProps {
//   mobileOpen: boolean;
//   selectedLanguage: string;
//   isLoggedIn: boolean;
//   onDrawerToggle: () => void;
//   handleLogin: () => void;
//   handleLogout: () => void;
//   handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
//   handleLanguageSelect: (lng: string) => void;
// }

// const MobileDrawer = ({
//   mobileOpen,
//   selectedLanguage,
//   handleLanguageSelect,
//   isLoggedIn,
//   onDrawerToggle,
//   handleMenuOpen,
//   handleLogin,
//   handleLogout,
// }: MobileDrawerProps) => {

//   const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
//   const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
//   const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     onDrawerToggle();
//   };

//   const handleMobileProductsToggle = () => {
//     setMobileProductsOpen(!mobileProductsOpen);
//   };

//   const handleMobileCategoriesToggle = () => {
//     setMobileCategoriesOpen(!mobileCategoriesOpen);
//   };

//   const handleMobileLanguageToggle = () => {
//     setMobileLanguageOpen(!mobileLanguageOpen);
//   };
//   // Mobile drawer content
//   const drawer = (
//     <Box sx={{ width: 250, padding: 2 }}>
//       <List>
//         {/* Products dropdown for mobile */}
//         <ListItem disablePadding>
//           <ListItemButton onClick={handleMobileProductsToggle}>
//             <ListItemText primary="Products" />
//             <AnimatedArrow open={mobileProductsOpen} />
//           </ListItemButton>
//         </ListItem>
//         <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemText primary="Case Studies" />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemText
//                 primary="Headspace"
//                 secondary="Creating moments of joy and mindfulness"
//               />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemText
//                 primary="Gojek"
//                 secondary="Warm and personal user experiences"
//               />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemText
//                 primary="DisneyNOW"
//                 secondary="Dynamic app experience"
//               />
//             </ListItemButton>
//           </List>
//         </Collapse>

//         {/* Categories dropdown for mobile */}
//         <ListItem disablePadding>
//           <ListItemButton onClick={handleMobileCategoriesToggle}>
//             <ListItemText primary="Categories" />
//             <AnimatedArrow open={mobileCategoriesOpen} />
//           </ListItemButton>
//         </ListItem>
//         <Collapse in={mobileCategoriesOpen} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemText primary="Animations" />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemText primary="Templates" />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemText primary="Icons" />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemText primary="Illustrations" />
//             </ListItemButton>
//           </List>
//         </Collapse>

//         {/* Other menu items with hover effects */}
//         <ListItem disablePadding>
//           <ListItemButton
//             sx={{
//               "&:hover": {
//                 "& .MuiListItemText-primary": {
//                   position: "relative",
//                   "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     bottom: -4,
//                     left: 0,
//                     right: 0,
//                     height: "2px",
//                     backgroundColor: blue[400],
//                     transform: "scaleX(1)",
//                     transition: "transform 0.3s ease",
//                   },
//                 },
//               },
//             }}
//           >
//             <ListItemText primary="Customers" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding>
//           <ListItemButton
//             sx={{
//               "&:hover": {
//                 "& .MuiListItemText-primary": {
//                   position: "relative",
//                   "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     bottom: -4,
//                     left: 0,
//                     right: 0,
//                     height: "2px",
//                     backgroundColor: blue[400],
//                     transform: "scaleX(1)",
//                     transition: "transform 0.3s ease",
//                   },
//                 },
//               },
//             }}
//           >
//             <ListItemText primary="Pricing" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding>
//           <ListItemButton
//             sx={{
//               "&:hover": {
//                 "& .MuiListItemText-primary": {
//                   position: "relative",
//                   "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     bottom: -4,
//                     left: 0,
//                     right: 0,
//                     height: "2px",
//                     backgroundColor: blue[400],
//                     transform: "scaleX(1)",
//                     transition: "transform 0.3s ease",
//                   },
//                 },
//               },
//             }}
//           >
//             <ListItemText primary="Search" />
//           </ListItemButton>
//         </ListItem>

//         {/* Dashboard menu for mobile */}
//         <ListItem disablePadding>
//           <ListItemButton onClick={handleMenuOpen}>
//             <ListItemText primary="Dashboard" />
//           </ListItemButton>
//         </ListItem>
//         {isLoggedIn ? (
//           <>
//             <ListItemButton sx={{ pl: 4 }}>
//               <Person sx={{ mr: 1, color: blue[400] }} />
//               <ListItemText primary="Profile" />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ShoppingBag sx={{ mr: 1, color: blue[400] }} />
//               <ListItemText primary="My Orders" />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//               <Favorite sx={{ mr: 1, color: blue[400] }} />
//               <ListItemText primary="My Favorites" />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }} onClick={handleLogout}>
//               <ExitToApp sx={{ mr: 1, color: blue[400] }} />
//               <ListItemText primary="Log Out" />
//             </ListItemButton>
//           </>
//         ) : (
//           <ListItemButton sx={{ pl: 4 }} onClick={handleLogin}>
//             <Person sx={{ mr: 1, color: blue[400] }} />
//             <ListItemText primary="Log In" />
//           </ListItemButton>
//         )}

//         {/* Language selector for mobile */}
//         <ListItem disablePadding>
//           <ListItemButton onClick={handleMobileLanguageToggle}>
//             <ListItemText primary="Language" />
//             <AnimatedArrow open={mobileLanguageOpen} />
//           </ListItemButton>
//         </ListItem>
//         <Collapse in={mobileLanguageOpen} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItemButton
//               sx={{ pl: 4 }}
//               onClick={() => handleLanguageSelect("ENG")}
//               selected={selectedLanguage === "ENG"}
//             >
//               <ListItemText primary="English (ENG)" />
//             </ListItemButton>
//             <ListItemButton
//               sx={{ pl: 4 }}
//               onClick={() => handleLanguageSelect("PER")}
//               selected={selectedLanguage === "PER"}
//             >
//               <ListItemText primary="Persian (PER)" />
//             </ListItemButton>
//             <ListItemButton
//               sx={{ pl: 4 }}
//               onClick={() => handleLanguageSelect("GER")}
//               selected={selectedLanguage === "GER"}
//             >
//               <ListItemText primary="German (GER)" />
//             </ListItemButton>
//           </List>
//         </Collapse>
//       </List>
//     </Box>
//   );
//   return (
//     <Box component="nav">
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//         sx={{
//           display: { xs: "block", md: "none" },
//           "& .MuiDrawer-paper": {
//             boxSizing: "border-box",
//             width: 250,
//           },
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </Box>
//   );
// };

// export default MobileDrawer;

import {
  Category,
  Home,
  Person,
  ShoppingCart,
  Star,
} from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { useState } from "react";

interface MobileBottomNavProps {
  onNavigate: (path: string) => void;
}

const MobileBottomNav = ({ onNavigate }: MobileBottomNavProps) => {
  const [value, setValue] = useState("/home");

  const navItems = [
    { label: "Home", icon: Home, path: "/home" },
    { label: "Categories", icon: Category, path: "/categories" },
    { label: "Basket", icon: ShoppingCart, path: "/cart" },
    { label: "Favorites", icon: Star, path: "/favorites" },
    { label: "Profile", icon: Person, path: "/profile" },
  ];

  const navActionSx = {
    color: grey[600],

    borderRadius: "10px",
    margin: "4px",
    minWidth: "auto",
    padding: "6px 0",

    transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",

    "& .MuiSvgIcon-root": {
      fontSize: "1.5rem",
    },
    "& .MuiBottomNavigationAction-label": {
      fontSize: "0.7rem",
      marginTop: "2px",
      "&.Mui-selected": {
        fontSize: "0.7rem",

        color: "inherit",
      },
    },

    "&.Mui-selected": {
      color: blue[700],

      backgroundColor: blue[50],
    },

    "&:hover": {
      backgroundColor: grey[50],
    },
  };

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "2px 0",
        }}
        elevation={5}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            onNavigate(newValue);
          }}
          sx={{ backgroundColor: "white" }}
        >
          {navItems.map((item) => (
            <BottomNavigationAction
              key={item.path}
              label={item.label}
              icon={<item.icon />}
              value={item.path}
              sx={navActionSx}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default MobileBottomNav;
