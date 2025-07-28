import Box from "@mui/material/Box";
import { Outlet } from "react-router";
import SmoothBackground from "../../animations/SmoothBackground";
import backImg from "../../assets/361061816_dc640528-48a2-4177-bedc-6122e75a1131.jpg";

const Layout = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SmoothBackground imageSrc={backImg} />
      <Outlet />
    </Box>
  );
};

export default Layout;
