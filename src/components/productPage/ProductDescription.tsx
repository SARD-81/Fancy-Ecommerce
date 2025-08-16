import { useState } from "react";
import { Box, Button, Container, Typography, TextField, Rating } from "@mui/material";
import Star from "@mui/icons-material/Star";  


const ProductDescription = ({
  activeTab,
  setActiveTab,
  onRatingChange,
  reviewsRef,
}) => {
  const mockReviews = [
    {
      id: 1,
      user: "Jane Doe",
      date: "August 14, 2024",
      rating: 5,
      comment:
        "I absolutely love this serum! My skin feels so much smoother and brighter.",
    },
    {
      id: 2,
      user: "John Smith",
      date: "August 10, 2024",
      rating: 4.5,
      comment:
        "Great product, but the packaging could be better. The serum itself is fantastic.",
    },
  ];

  const [newReviewText, setNewReviewText] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(0);

  const handleSendReview = () => {
    console.log("Sending review:", {
      rating: newReviewRating,
      text: newReviewText,
    });
    onRatingChange(newReviewRating);
    setNewReviewText("");
    setNewReviewRating(0);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Box
              component="ul"
              sx={{ listStyleType: "disc", pl: 4, mt: 2, "& li": { mb: 1 } }}
            >
              <li>
                Adipisci velit, sed quia non numquam eius modi tempora incidunt.
              </li>
              <li>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit.
              </li>
            </Box>
          </Typography>
        );
      case "Additional Information":
        return (
          <Typography color="text.secondary">
            Additional product details and specifications would go here.
          </Typography>
        );
      case "Review":
        return (
          <Box ref={reviewsRef}>
            {mockReviews.map((review) => (
              <Box
                key={review.id}
                sx={{
                  pb: 3,
                  borderBottom: "1px solid",
                  borderColor: "grey.200",
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {review.user}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {review.date}
                    </Typography>
                  </Box>
                  <Rating
                    value={review.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: "text.secondary" }}
                >
                  {review.comment}
                </Typography>
              </Box>
            ))}
            <Box sx={{ mt: 5 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Write a Review
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Your Rating:
                </Typography>
                <Rating
                  value={newReviewRating}
                  precision={0.5}
                  onChange={(e, val) => setNewReviewRating(val)}
                  emptyIcon={
                    <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </Box>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Your Review"
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                onClick={handleSendReview}
                disabled={!newReviewRating || !newReviewText.trim()}
                sx={{ borderRadius: "9999px", px: 4 }}
              >
                Send
              </Button>
            </Box>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box component="section" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: "1px solid", borderColor: "grey.200" }}>
          <Box component="nav" sx={{ display: "flex", gap: 4, mb: "-1px" }}>
            {["Description", "Additional Information", "Review"].map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                sx={{
                  py: 2,
                  px: 0,
                  borderBottom: "2px solid",
                  borderColor: activeTab === tab ? "#42a5f5" : "transparent",
                  color: activeTab === tab ? "#42a5f5" : "grey.500",
                  fontWeight: activeTab === tab ? "bold" : "normal",
                  borderRadius: 0,
                }}
              >
                {tab}
              </Button>
            ))}
          </Box>
        </Box>
        <Box sx={{ mt: 3 }}>{renderContent()}</Box>
      </Container>
    </Box>
  );
};
export default ProductDescription;
