import { Box } from "@mui/material";
import bannerimg1 from "../../public/images/Banner/ordinary-life-scene-from-mall-america.jpg";
import bannerimg2 from "../../public/images/Banner/woman-choosing-phone-technology-store.jpg";
import MainBanner from "../components/MainBanner";

const Home = () => {
  const bannerImages = [bannerimg1, bannerimg2];
  return (
    <Box>
      {/* Main Banner */}
      <MainBanner images={bannerImages} />
    </Box>
  );
};

export default Home;
