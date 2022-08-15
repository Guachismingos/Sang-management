import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  Divider,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import useForm from "../hooks/useForm";
import img_logo from "../assets/images/splash_image.png";

const Login = () => {
  const userExists = localStorage.getItem("user-email");
  const [{ email, password }, handleInputChange] = useForm({
    email: !!userExists ? userExists : "",
    password: "",
  });
  const { singIn } = useAuth();
  const [error, setError] = useState({ error: null, type: "info" });
  const [loading, setLoading] = useState(false);

  const [rememberUser, setRememberUser] = useState(!!userExists ? true : false);

  useEffect(() => {
    if (rememberUser) {
      localStorage.setItem("user-email", email);
    }
  }, [email, rememberUser]);

  useEffect(() => {
    if (!rememberUser) {
      localStorage.removeItem("user-email");
    }
  }, [rememberUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError({ ...error, error: null });
      setLoading(true);
      await singIn(email, password);
    } catch (err) {
      setTimeout(() => {
        setLoading(false);
        switch (err.code) {
          case "auth/user-not-found":
            setError({ error: "El correo no es valido!.", type: "warning" });
            break;
          case "auth/too-many-requests":
            setError({
              error:
                "El acceso a esta cuenta ha sido temporalmente deshabilitado debido a varios intentos de inicio de sesión fallidos, solicite un cambio de contraseña o espere un momento antes de volver a intentar.",
              type: "error",
            });
            break;
          case "auth/wrong-password":
            setError({
              error: "La contraseña no es valida!.",
              type: "error",
            });
            break;
          case "auth/unauthorized-domain":
            setError({
              error: "El dominio de donde intenta acceder no está registrado.",
              type: "error",
            });
            break;
          default:
            setError({
              error:
                "Algo salio mal, pongase en contacto con el administrador.",
              type: "info",
            });
            break;
        }
      }, 2100);
    }
  };
  return (
    <Container maxWidth={false} className="pageContainer">
      <Box className="centerChild animate__animated animate__fadeIn animate__faster">
        <Container maxWidth="xs">
          <Paper elevation={8}>
            <Box component="form" onSubmit={handleSubmit}>
              <Stack
                sx={{ py: 5, px: 2 }}
                justifyContent="center"
                display="flex"
                alignItems="center"
                spacing={2}
              >
                <img width="60%" src={img_logo} />
                <Typography variant="h5" textAlign="center">
                  Inicio de sesión
                </Typography>
                {error.error && (
                  <Alert
                    variant="filled"
                    square
                    sx={{ width: "100%" }}
                    severity={error.type}
                    onClose={() => setError({ ...error, error: null })}
                  >
                    {error.error}
                  </Alert>
                )}
                <TextField
                  disabled={loading}
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  type="email"
                  label="Correo electrónico"
                />
                <TextField
                  disabled={loading}
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  type="password"
                  label="Contraseña"
                />
                <FormControlLabel
                  sx={{ width: "100%", justifyContent: "left" }}
                  control={
                    <Checkbox
                      disabled={loading}
                      checked={rememberUser}
                      inputProps={{ "aria-label": "controlled" }}
                      onChange={() => setRememberUser(!rememberUser)}
                    />
                  }
                  label="Recuérdame"
                />
                <Divider variant="fullWidth" />
                <Button
                  disabled={loading}
                  fullWidth
                  type="submit"
                  size="large"
                  variant="contained"
                >
                  {loading ? (
                    <CircularProgress
                      size="1rem"
                      sx={{ p: 1 }}
                      color="inherit"
                    />
                  ) : (
                    "Continuar"
                  )}
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Container>
  );
};

export default Login;
