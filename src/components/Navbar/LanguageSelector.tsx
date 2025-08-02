import { Language } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { blue } from "@mui/material/colors";
import AnimatedArrow from "./AnimatedArrow";

interface LanguageSelectorProps {
  handleMenuClose: () => void;
  handleLanguageSelect: (lng: string) => void;
  languageAnchorEl: null | HTMLElement;
  selectedLanguage: string;
  handleLanguageMenuOpen: (e:React.MouseEvent<HTMLElement>) => void;
  
}

const LanguageSelector = ({
  handleLanguageMenuOpen,
  handleLanguageSelect,
  handleMenuClose,
  selectedLanguage,
  languageAnchorEl,
}: LanguageSelectorProps) => {
  return (
    <>
      <Button
        onClick={handleLanguageMenuOpen}
        startIcon={<Language />}
        endIcon={<AnimatedArrow open={Boolean(languageAnchorEl)} />}
        sx={{
          color: blue[400],
          textTransform: "none",
          "&:hover": {
            backgroundColor: blue[50],
          },
        }}
      >
        {selectedLanguage}
      </Button>
      <Menu
        anchorEl={languageAnchorEl}
        open={Boolean(languageAnchorEl)}
        onClose={handleMenuClose}
        TransitionProps={{ timeout: 200 }}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1,
            minWidth: 120,
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
        <MenuItem
          onClick={() => handleLanguageSelect("ENG")}
          selected={selectedLanguage === "ENG"}
        >
          English (ENG)
        </MenuItem>
        <MenuItem
          onClick={() => handleLanguageSelect("PER")}
          selected={selectedLanguage === "PER"}
        >
          Persian (PER)
        </MenuItem>
        <MenuItem
          onClick={() => handleLanguageSelect("GER")}
          selected={selectedLanguage === "GER"}
        >
          German (GER)
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSelector;
