import {
  Box,
  Typography,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router";
import {
  RegisterFormSchema,
  type RegisterForm,
} from "../../utils/AuthFormSchema";

const Register = () => {
  const {
    register,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: "all",
    resolver: zodResolver(RegisterFormSchema),
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
        Create an account
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Archivo",
          fontWeight: 100,
          fontSize: 15,
          color: "#636364",
          mb: 3,
        }}
      >
        Welcome To My Fancy E-Commerce
      </Typography>
      <form
        action=""
        className="w-full flex flex-col justify-center"
        onSubmit={HandleSubmit}
      >
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <TextField
            id="first-name"
            {...register("firstname")}
            error={!!errors.firstname}
            helperText={errors.firstname?.message}
            label="First name"
            required
            variant="outlined"
            size="small"
            sx={{
              borderRadius: "2rem",
              ml: 2,
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.5rem",
              },
            }}
          ></TextField>
          <TextField
            id="last-name"
            {...register("lastname")}
            error={!!errors.lastname}
            helperText={errors.lastname?.message}
            label="Last name"
            required
            variant="outlined"
            size="small"
            sx={{
              borderRadius: "2rem",
              mr: 2,
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.5rem",
              },
            }}
          ></TextField>
        </Box>

        <TextField
          id="e-mail"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          label="Email"
          required
          variant="outlined"
          size="small"
          sx={{
            borderRadius: "2rem",
            mx: 2,
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.5rem",
            },
          }}
        />
        <FormControl
          {...register("password")}
          error={!!errors.password}
          sx={{ mx: 2, mb: -2 }}
          variant="outlined"
        >
          <InputLabel htmlFor="password">Password*</InputLabel>
          <OutlinedInput
            id="password"
            {...register("password")}
            error={!!errors.password}
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
            label="Password"
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
        <FormControlLabel
          sx={{ mx: 1, mb: 2 }}
          control={
            <Checkbox
              required
              sx={{
                color: "#5409DA",
                "&.Mui-checked": {
                  color: "rgba(84, 9, 218,0.8)",
                },
              }}
            />
          }
          label={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Archivo",
                  fontWeight: 200,
                  fontSize: 13,
                  color: "#000",
                }}
              >
                I agree to the
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Archivo",
                  fontSize: 13,
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => navigate("/terms-conditions")}
              >
                Terms & Conditions
              </Typography>
            </Box>
          }
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 1,
            mx: 2,
            borderRadius: "0.5rem",
            backgroundColor: "#5409DA",
            fontFamily: "Archivo",
            fontWeight: 700,
          }}
        >
          Create account
        </Button>

        <Divider variant="middle">
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
            Or register with
          </Typography>
        </Divider>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <Button
            variant="outlined"
            sx={{
              mt: 1,
              mx: 1,
              px: 4,
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
            Google
          </Button>
          <Button
            variant="outlined"
            sx={{
              mt: 1,
              mx: 1,
              px: 4,
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
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25 0C11.1875 0 0 11.1875 0 25C0 36.0625 7.15625 45.4063 17.0937 48.7188C18.3437 48.9375 18.8125 48.1875 18.8125 47.5313C18.8125 46.9375 18.7813 44.9688 18.7813 42.875C12.5 44.0313 10.875 41.3437 10.375 39.9375C10.0937 39.2187 8.875 37 7.8125 36.4062C6.9375 35.9375 5.6875 34.7812 7.78125 34.75C9.75 34.7187 11.1563 36.5625 11.625 37.3125C13.875 41.0937 17.4688 40.0313 18.9063 39.375C19.125 37.75 19.7812 36.6562 20.5 36.0312C14.9375 35.4062 9.125 33.25 9.125 23.6875C9.125 20.9687 10.0938 18.7187 11.6875 16.9687C11.4375 16.3437 10.5625 13.7812 11.9375 10.3437C11.9375 10.3437 14.0313 9.6875 18.8125 12.9063C20.8125 12.3438 22.9375 12.0625 25.0625 12.0625C27.1875 12.0625 29.3125 12.3438 31.3125 12.9063C36.0938 9.65625 38.1875 10.3437 38.1875 10.3437C39.5625 13.7812 38.6875 16.3437 38.4375 16.9687C40.0313 18.7187 41 20.9375 41 23.6875C41 33.2812 35.1563 35.4062 29.5938 36.0312C30.5 36.8125 31.2813 38.3125 31.2813 40.6563C31.2813 44 31.25 46.6875 31.25 47.5313C31.25 48.1875 31.7188 48.9688 32.9688 48.7188C42.8438 45.4063 50 36.0312 50 25C50 11.1875 38.8125 0 25 0Z"
                fill="#1B1F23"
              />
            </svg>
            Github
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Register;
