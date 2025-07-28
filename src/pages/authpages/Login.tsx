import {
  Box,
  Typography,
  TextField,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "../../styles/fonts.css";
import { useNavigate } from "react-router";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";
import { LoginFormSchema, type LoginForm } from "../../utils/AuthFormSchema";

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "all",
    resolver: zodResolver(LoginFormSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Archivo",
          fontWeight: 900,
          fontSize: 18,
          mb: 1,
          mt: 4,
        }}
      >
        Welcome Back To My Fancy E-Commerce
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Archivo",
          fontWeight: 100,
          fontSize: 15,
          color: "#636364",
          mb: 4,
        }}
      >
        Welcome back! Please enter your details.
      </Typography>

      <form
        action=""
        className="w-full flex flex-col justify-center"
        onSubmit={HandleSubmit}
      >
        <InputLabel sx={{ justifyItems: "flex-start", mx: 6, mb: 1 }}>
          Email
        </InputLabel>
        <TextField
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          id="e-mail"
          required
          variant="outlined"
          size="small"
          sx={{
            borderRadius: "2rem",
            mx: 6,
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.5rem",
            },
          }}
        />
        <InputLabel sx={{ justifyItems: "flex-start", mx: 6, mb: 1 }}>
          Password
        </InputLabel>
        <FormControl sx={{ mx: 6, mb: -2 }} variant="outlined">
          <OutlinedInput
            {...register("password")}
            error={!!errors.password}
            id="password"
            placeholder="Enter your password"
            required
            size="small"
            type={showPassword ? "text" : "password"}
            sx={{
              borderRadius: "0.5rem",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText
            id="password-helper-text"
            error={!!errors}
            sx={{
              mx: 0,
              mt: 0.5,
              visibility: errors ? "visible" : "hidden",
              height: errors ? "auto" : "20px",
            }}
          >
            {errors.password?.message || " "}
          </FormHelperText>
        </FormControl>
        <Box sx={{ display: "flex" }}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#5409DA",
                  "&.Mui-checked": {
                    color: "rgba(84, 9, 218,0.8)",
                  },
                }}
              />
            }
            label="Remember me"
            sx={{
              mx: 5,

              ".MuiFormControlLabel-label": { fontSize: "14px" },
            }}
          />
          <Typography
            onClick={() => navigate("/forget-password")}
            sx={{
              fontSize: 14,
              mt: "9px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Forgot password!!
          </Typography>
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 1,
            mx: 6,
            borderRadius: "0.5rem",
            backgroundColor: "#5409DA",
            fontFamily: "Archivo",
            fontWeight: 700,
          }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          sx={{
            mt: 1,
            mx: 6,
            borderRadius: "0.5rem",
            color: "#5409DA",
            fontFamily: "Archivo",
            fontWeight: 500,
          }}
        >
          <svg
            className="mr-2"
            width="25"
            height="25"
            viewBox="0 0 50 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_102_74)">
              <path
                d="M49.9999 26.1665C49.9999 24.4443 49.8333 22.6665 49.5555 20.9999H25.4999V30.8332H39.2777C38.7222 33.9999 36.8888 36.7777 34.1666 38.5554L42.3888 44.9443C47.2222 40.4443 49.9999 33.8888 49.9999 26.1665Z"
                fill="#4280EF"
              />
              <path
                d="M25.4999 51.0555C32.3888 51.0555 38.1666 48.7777 42.3888 44.8888L34.1666 38.5555C31.8888 40.1111 28.9444 40.9999 25.4999 40.9999C18.8333 40.9999 13.2222 36.4999 11.1666 30.4999L2.72217 36.9999C7.0555 45.611 15.8333 51.0555 25.4999 51.0555Z"
                fill="#34A353"
              />
              <path
                d="M11.1666 30.4444C10.1111 27.2777 10.1111 23.8333 11.1666 20.6666L2.72217 14.1111C-0.888946 21.3333 -0.888946 29.8333 2.72217 36.9999L11.1666 30.4444Z"
                fill="#F6B704"
              />
              <path
                d="M25.4999 10.1666C29.1111 10.1111 32.6666 11.5 35.2777 14L42.5555 6.66662C37.9444 2.33328 31.8333 -5.10303e-05 25.4999 0.0555045C15.8333 0.0555045 7.0555 5.49995 2.72217 14.1111L11.1666 20.6666C13.2222 14.6111 18.8333 10.1666 25.4999 10.1666Z"
                fill="#E54335"
              />
            </g>
            <defs>
              <clipPath id="clip0_102_74">
                <rect width="50" height="51.1111" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Sign in with Google
        </Button>
      </form>
    </>
  );
};

export default Login;
