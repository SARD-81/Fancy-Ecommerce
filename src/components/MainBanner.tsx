import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import RotatingText from "../animations/RotatingText";

// Define the type for the component props
interface MainBannerProps {
  images: string[]; // Array of image paths
}

const MainBanner = ({ images }: MainBannerProps) => {
  // State to hold the randomly selected image
  const [randomImage, setRandomImage] = useState<string>("");

  // Function to select a random image from the array
  const selectRandomImage = () => {
    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    }
  };

  // Select a random image when the component mounts or when the images array changes
  useEffect(() => {
    selectRandomImage();
  }, [images]);

  // Handle case where no images are provided
  if (!randomImage) {
    return (
      <Box
        sx={{
          height: { xs: "15rem", sm: "35rem" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e0e0e0",
        }}
      >
        <Typography>Loading banner...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "stretch",
        height: { xs: "15rem", sm: "35rem" },
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={randomImage}
        alt="banner img"
        className="w-full h-full object-cover block"
      />

      {/* Gradient Overlay with Content */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "100%", sm: "70%" },
          height: "100%",
          background: {
            xs: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)",
            sm: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: "center",
          color: "white",
          padding: { xs: 2, sm: 3, md: 4 },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            fontSize: { xs: "0.5rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
          }}
        >
          Discover Amazing
        </Typography>

        {/* Rotating Text Container */}
        <Box
          sx={{
            mt: 1,
            display: "flex",
            alignItems: "center",
            backgroundColor: "cyan.300",
            color: "black",
            borderRadius: "8px",
            overflow: "hidden",
            // px: { xs: 1, sm: 1, md: 2 },
            py: { xs: 0.5, sm: 0.75, md: 1 },
          }}
        >
          <RotatingText
            texts={[
              "Laptops",
              "Smart Phones",
              "Gaming PC",
              "Tablets",
              "Gaming Console",
            ]}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            mainClassName="text-4xl px-2 sm:px-2 md:w-100 h-20 px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center items-center rounded-lg"
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          />
        </Box>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
            maxWidth: { sm: "80%" },
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Explore our collection of amazing tech products and services designed
          to enhance your experience.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            px: 3,
            py: 1,
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default MainBanner;
