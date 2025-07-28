import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSpring, animated } from "@react-spring/web";
import img1 from "../../../public/images/138803-OSOZ68-557.jpg";
import img2 from "../../../public/images/1216594_139420-OTKH85-638.jpg";
import img3 from "../../../public/images/8626705_3955595.jpg";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ImageSwiper from "../../components/ImageSwiper";
import { useNavigate, useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import Login from "./Login";
import Register from "./Register";

export type AuthMode = "login" | "register";

const AnimatedGrid = animated(Grid);

const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState<AuthMode>(
    () => (searchParams.get("mode") as AuthMode) || "login"
  );
  const navigate = useNavigate();

  useEffect(() => {
    setMode(searchParams.get("mode") as AuthMode);
  }, [searchParams]);

  const { xA, xB } = useSpring({
    to: mode === "login" ? { xA: 1, xB: -1 } : { xA: -1, xB: 1 },
    config: { mass: 1, tension: 300, friction: 10 },
  });

  return (
    <Box
      sx={{
        maxWidth: "52rem",
        maxHeight: "45rem",
        backdropFilter: "blur(10px) saturate(200%)",
        WebkitBackdropFilter: "blur(10px) saturate(200%)",
        backgroundColor: "rgba(141, 216, 255, 0.4)",
        borderRadius: "2rem",
        border: "1px solid rgba(209, 213, 219, 0.3)",
        boxShadow: 20,
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={0.5}
        columns={2}
        sx={{ width: "100%", height: "100%" }}
      >
        <AnimatedGrid
          size="grow"
          sx={{ order: mode === "login" ? 2 : 1 }}
          style={{
            transform: xA.to((v) => `translateX(${v}%)`),
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "2rem",
              padding: "0.5rem",
            }}
          >
            <CloseRoundedIcon
              sx={{
                position: "absolute",
                right: mode === "login" ? 10 : null,
                fontSize: 40,
                zIndex: 1000,
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            />
            <Box
              sx={{
                height: "100%",
                width: "100%",
                maskImage:
                  mode === "register"
                    ? "radial-gradient(circle 40px at top left, transparent 0, transparent 55px, black 60px, black 100%)"
                    : "radial-gradient(circle 40px at top right, transparent 0, transparent 55px, black 60px, black 100%)",
                WebkitMaskImage:
                  mode === "register"
                    ? "radial-gradient(circle 40px at top left, transparent 0, transparent 55px, black 60px, black 100%)"
                    : "radial-gradient(circle 40px at top right, transparent 0, transparent 55px, black 60px, black 100%)",
                maskRepeat: "no-repeat",
              }}
            >
              <ImageSwiper images={[img1, img2, img3]} />
            </Box>
          </Box>
        </AnimatedGrid>
        <AnimatedGrid
          size="grow"
          sx={{
            order: mode === "register" ? 2 : 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          style={{
            transform: xB.to((v) => `translateX(${v}%)`),
          }}
        >
          {mode === "login" ? (
            <>
              <Login />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Archivo",
                  fontWeight: 100,
                  fontSize: 11,
                  color: "#404040",
                  mt: 1,
                }}
              >
                Don’t have an account?
                <Button
                  sx={{ fontSize: 11, color: "#5409DA" }}
                  onClick={() => {
                    if (mode === "login") setSearchParams("mode=register");
                    else setSearchParams("mode=login");
                  }}
                >
                  Sign up fo free!
                </Button>
              </Typography>
            </>
          ) : (
            <>
              <Register />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Archivo",
                  fontWeight: 100,
                  fontSize: 11,
                  color: "#404040",
                  mt: 1,
                }}
              >
                Have any account?
                <Button
                  sx={{ fontSize: 11, color: "#5409DA" }}
                  onClick={() => {
                    if (mode === "register") setSearchParams("mode=login");
                    else setSearchParams("mode=register");
                  }}
                >
                  Sign in!
                </Button>
              </Typography>
            </>
          )}
        </AnimatedGrid>
      </Grid>
    </Box>
  );
};

export default AuthPage;
