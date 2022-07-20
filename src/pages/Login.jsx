import { Box, Container, Paper, Stack } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import useForm from "../hooks/useForm";

const Login = () => {
  const [{ email, password }, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { singIn } = useAuth();
  const [error, setError] = useState({ error: null, type: "info" });
  const [loading, setLoading] = useState(false);

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
              type: "warning",
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
      <Box className="centerChild animate__animated animate__zoomIn animate__faster">
        <Container maxWidth="sm">
          <Paper>
            <Stack>

            </Stack>
          </Paper>
        </Container>
      </Box>
    </Container>
  );
};

export default Login;
