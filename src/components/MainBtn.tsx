import React, { type MouseEventHandler } from "react";
import { Button, CircularProgress, Box } from "@mui/material";
import { type SvgIconComponent } from "@mui/icons-material";

interface MainBtnProps {
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  size?: "small" | "medium" | "large";
  icon?: SvgIconComponent;
  iconPosition?: "start" | "end" | "text" | "none";
  isLoading?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  customStyles?: React.CSSProperties;
  loadingText?: string;
  gradient?: boolean;
  hoverEffect?: "scale" | "lift" | "glow" | "none";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  shadow?: "none" | "small" | "medium" | "large";
}

const MainBtn: React.FC<MainBtnProps> = ({
  variant = "contained",
  color = "primary",
  size = "medium",
  icon = null,
  iconPosition = "start",
  isLoading = false,
  isDisabled = false,
  isFullWidth = false,
  children,
  onClick,
  href,
  customStyles = {},
  loadingText = "Loading...",
  gradient = false,
  hoverEffect = "scale",
  rounded = "medium",
  shadow = "medium",
}) => {
  // Define button sizes
  const sizeStyles = {
    small: {
      padding: "4px 12px",
      fontSize: "0.75rem",
      iconSize: 16,
    },
    medium: {
      padding: "6px 16px",
      fontSize: "0.875rem",
      iconSize: 20,
    },
    large: {
      padding: "8px 22px",
      fontSize: "1rem",
      iconSize: 24,
    },
  };

  // Define rounded styles
  const roundedStyles = {
    none: 0,
    small: "4px",
    medium: "8px",
    large: "20px",
    full: "50px",
  };

  // Define shadow styles
  const shadowStyles = {
    none: "none",
    small: "0 2px 4px rgba(0,0,0,0.1)",
    medium: "0 4px 8px rgba(0,0,0,0.15)",
    large: "0 6px 12px rgba(0,0,0,0.2)",
  };

  // Define hover effects
  const hoverEffects = {
    scale: {
      transform: "scale(1.03)",
      transition: "transform 0.2s ease",
    },
    lift: {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
      transition: "all 0.2s ease",
    },
    glow: {
      boxShadow: `0 0 10px 2px ${
        color === "primary"
          ? "#1976d2"
          : color === "secondary"
          ? "#9c27b0"
          : "#f50057"
      }`,
      transition: "box-shadow 0.2s ease",
    },
    none: {},
  };

  // Gradient background generator
  const getGradient = () => {
    switch (color) {
      case "primary":
        return "linear-gradient(45deg, #2196F3 0%, #21CBF3 90%)";
      case "secondary":
        return "linear-gradient(45deg, #9C27B0 0%, #E040FB 90%)";
      case "error":
        return "linear-gradient(45deg, #F44336 0%, #FF9800 90%)";
      case "success":
        return "linear-gradient(45deg, #4CAF50 0%, #8BC34A 90%)";
      case "warning":
        return "linear-gradient(45deg, #FF9800 0%, #FFC107 90%)";
      case "info":
        return "linear-gradient(45deg, #00BCD4 0%, #80DEEA 90%)";
      default:
        return "linear-gradient(45deg, #2196F3 0%, #21CBF3 90%)";
    }
  };

  // Button styles
  const buttonStyles = {
    borderRadius: roundedStyles[rounded],
    boxShadow: shadowStyles[shadow],
    fontWeight: 600,
    textTransform: "none",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
    ...(gradient && {
      background: getGradient(),
      color: "#fff",
      border: "none",
      "&:hover": {
        background: getGradient(),
        ...hoverEffects[hoverEffect],
      },
    }),
    ...(!gradient && {
      "&:hover": hoverEffects[hoverEffect],
    }),
    ...sizeStyles[size],
    ...customStyles,
  };

  // Render icon component
  const renderIcon = () => {
    if (isLoading) {
      return (
        <CircularProgress
          size={sizeStyles[size].iconSize}
          sx={{
            color:
              variant === "contained"
                ? "#fff"
                : color === "primary"
                ? "#1976d2"
                : "#9c27b0",
            mr: iconPosition === "start" && !isLoading ? 1 : 0,
            ml: iconPosition === "end" && !isLoading ? 1 : 0,
          }}
        />
      );
    }

    if (icon) {
      const IconComponent = icon;
      return (
        <IconComponent
          sx={{
            fontSize: sizeStyles[size].iconSize,
            mr: iconPosition === "start" ? 1 : 0,
            ml: iconPosition === "end" ? 1 : 0,
          }}
        />
      );
    }
    return null;
  };

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disabled={isDisabled || isLoading}
      fullWidth={isFullWidth}
      onClick={onClick}
      href={href}
      sx={buttonStyles}
      startIcon={
        iconPosition === "start" && (icon || isLoading) ? renderIcon() : null
      }
      endIcon={
        iconPosition === "end" && (icon || isLoading) ? renderIcon() : null
      }
    >
      {isLoading && iconPosition === "text" ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {renderIcon()}
          <Box component="span" sx={{ ml: 1 }}>
            {loadingText}
          </Box>
        </Box>
      ) : (
        children
      )}
    </Button>
  );
};

export default MainBtn;
