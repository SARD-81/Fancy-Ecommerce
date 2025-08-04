import { Person, ShoppingBag, Favorite, ExitToApp } from "@mui/icons-material";
import { Button, Menu, MenuItem, Divider } from "@mui/material";
import { blue } from "@mui/material/colors";
import AnimatedArrow from "./AnimatedArrow";

interface DashboardProps {
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleMenuClose: () => void;
  handleLogout: () => void;
  handleLogin: () => void;
  isLoggedIn: boolean;
  anchorEl: null | HTMLElement;
}

const DashboardDropdown = ({
  handleLogin,
  handleLogout,
  handleMenuClose,
  handleMenuOpen,
  isLoggedIn,
  anchorEl,
}: DashboardProps) => {
  return (
    <div>
      <Button
        onClick={handleMenuOpen}
        endIcon={<AnimatedArrow open={Boolean(anchorEl)} />}
        variant="contained"
        sx={{
          backgroundColor: blue[400],
          color: "white",
          textTransform: "none",
          "&:hover": {
            backgroundColor: blue[600],
          },
        }}
      >
        Dashboard
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
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
        {!isLoggedIn ? (
          <MenuItem onClick={handleLogin}>
            <Person sx={{ mr: 1, color: blue[400] }} />
            Log In
          </MenuItem>
        ) : (
          <>
            <MenuItem onClick={handleMenuClose}>
              <Person sx={{ mr: 1, color: blue[400] }} />
              Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ShoppingBag sx={{ mr: 1, color: blue[400] }} />
              My Orders
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Favorite sx={{ mr: 1, color: blue[400] }} />
              My Favorites
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ExitToApp sx={{ mr: 1, color: blue[400] }} />
              Log Out
            </MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
};

export default DashboardDropdown;
