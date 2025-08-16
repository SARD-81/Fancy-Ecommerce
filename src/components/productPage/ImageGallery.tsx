import { Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ImageGallery = ({ images, activeImage, setActiveImage, productName }) => {
  const fallbackImage =
    "https://placehold.co/500x500/E8E9F3/414459?text=Product+Image";

  const handleNavigation = (direction) => {
    const currentIndex = images.indexOf(activeImage);
    let nextIndex;
    if (direction === "next") {
      nextIndex = (currentIndex + 1) % images.length;
    } else {
      nextIndex = (currentIndex - 1 + images.length) % images.length;
    }
    setActiveImage(images[nextIndex]);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ position: "relative", width: "100%" }}>
        <img
          src={activeImage}
          alt={productName}
          style={{
            width: "100%",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
        <Box
          onClick={() => handleNavigation("prev")}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            cursor: "pointer",
            backgroundColor: "rgba(255,255,255,0.7)",
            p: 1,
            borderRadius: "50%",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ChevronLeftIcon />
        </Box>
        <Box
          onClick={() => handleNavigation("next")}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            cursor: "pointer",
            backgroundColor: "rgba(255,255,255,0.7)",
            p: 1,
            borderRadius: "50%",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ChevronRightIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          width: "100%",
          mt: 2,
          overflowX: "auto",
          p: 1,
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "6px",
              cursor: "pointer",
              border: `2px solid ${
                activeImage === img ? "#42a5f5" : "transparent"
              }`,
              transform: activeImage === img ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s, border-color 0.2s",
            }}
            onClick={() => setActiveImage(img)}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/100x100/E8E9F3/414459?text=Thumb";
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
export default ImageGallery;
