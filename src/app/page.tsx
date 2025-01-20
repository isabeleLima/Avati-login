"use client";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  Link,
  Snackbar,
  Alert,
  SnackbarCloseReason,
} from "@mui/material";
import Bg from "../assets/lemon.jpg";
import { CssTextField } from "./styles/input";
import { IsEmailValid, IsPasswordValid } from "./service/utils";
import { login } from "./api/login";
import { useRouter } from "next/navigation";
import "@fontsource/roboto/400.css";

export default function Login() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async () => {
    if (IsEmailValid(email) == false) {
      setMessage("Email invalido ");
      setOpen(true);
      return;
    }
    if (IsPasswordValid(password) == false) {
      setMessage("Senha invalida");
      setOpen(true);
      return;
    }
    if ((await login(email, password)) == false) {
      setMessage("Email ou senha incorretos");
      setOpen(true);
    }

    if (isClient) {
      router.push("/home"); // Navega para a página "home"
    }
  };

  return (
    <Container fixed>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Grid container>
          <Grid size={6}>
            <Box
              sx={{
                width: 500,
                height: 700,
                padding: 3,
                backgroundColor: "#006e24",
                borderEndStartRadius: 30,
                borderStartStartRadius: 30,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "50%",
                }}
              >
                <Stack
                  sx={{
                    width: "80%",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h1"
                    align="left"
                    gutterBottom
                    sx={{
                      color: "primary.contrastText",
                    }}
                  >
                    Faça login agora
                  </Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "20%",
                }}
              >
                <Stack
                  component="form"
                  spacing={4}
                  sx={{
                    width: "80%",
                    paddingBottom: "5%",
                  }}
                >
                  <CssTextField
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    label="email"
                    type="email"
                    size="small"
                  />

                  <CssTextField
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    id="password"
                    label="password"
                    type="password"
                    size="small"
                  />

                  <Button
                    variant="outlined"
                    size="small"
                    disableElevation
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>

                  <Divider
                    sx={{
                      color: "primary.contrastText",
                    }}
                  >
                    Ou
                  </Divider>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{
                      color: "primary.contrastText",
                    }}
                  >
                    Não possui uma conta?{" "}
                  </Typography>
                  <Link
                    href="#"
                    rel="noopener"
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{
                        color: "primary.contrastText",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      Cadastre-se!
                    </Typography>
                  </Link>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid size={6}>
            <Box
              sx={{
                width: 500,
                height: 700,
                backgroundImage: `url(${Bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderStartEndRadius: 30,
                borderEndEndRadius: 30,
              }}
            ></Box>
          </Grid>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
              {`${message}`}
            </Alert>
          </Snackbar>
        </Grid>
      </Box>
    </Container>
  );
}
