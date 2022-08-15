import { useAuth } from "./../../context/AuthContext";
import {
  Box,
  Checkbox,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Download, Comment, Topic, Info, Flaky } from "@mui/icons-material";
import { useCallback, useEffect, useState } from "react";
import useForm from "../../hooks/useForm";

const RequirementDisplay = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [
    {
      lastNames,
      email,
      address,
      primaryPhone,
      secondaryPhone,
      idFile,
      depositFile,
      waterFile,
      lightFile,
      taxesFile,
    },
    handleInputChange,
    setValues,
  ] = useForm({
    lastNames: "",
    email: "",
    address: "",
    primaryPhone: "",
    secondaryPhone: "",
    idFile: "",
    depositFile: "",
    waterFile: "",
    lightFile: "",
    taxesFile: "",
  });
  const { getRequirementbyId } = useAuth();
  const [loading, setLoading] = useState(true);

  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleLoad = useCallback(async () => {
    setLoading(true);
    try {
      setLoading(true);
      const clientDoc = await getRequirementbyId(id);
      if (clientDoc.data()) {
        setValues({ ...clientDoc.data() });
      } else {
        navigate("/panel", { replace: true });
      }
    } catch (_) {}
    setLoading(false);
  }, [getRequirementbyId, id, setValues, navigate]);

  useEffect(() => {
    handleLoad();
    if (id) {
    }
  }, [id]);

  return (
    <Container maxWidth={false} className="pageContainer">
      <Box className="centerChild animate__animated animate__fadeIn animate__faster">
        <Container maxWidth="lg">
          <Grid spacing={2} container>
            <Grid xs={12} md={8} item>
              <Paper elevation={8} sx={{ height: "100%" }}>
                <Stack gap={2} p={2}>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <Info color="info" />
                    Información del Requerimiento
                  </Typography>
                  <Divider />
                  <Typography>
                    <strong>Apellidos: </strong>
                    {lastNames}
                    <br />
                    <strong>Correo: </strong>
                    {email}
                    <br />
                    <strong>Dirección: </strong>
                    {address}
                    <br />
                    <strong>Teléfono 1: </strong>
                    {primaryPhone}
                    <br />
                    <strong>Teléfono 2: </strong>
                    {secondaryPhone}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
            <Grid xs={12} md={4} item>
              <Paper elevation={8} sx={{ height: "100%" }}>
                <Stack gap={2} p={2}>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <Topic color="secondary" />
                    Documentos
                  </Typography>
                  <Divider />
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    {[0, 1, 2, 3].map((value) => (
                      <ListItem
                        key={value}
                        secondaryAction={
                          <IconButton edge="end">
                            <Download />
                          </IconButton>
                        }
                        disablePadding
                      >
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                            />
                          </ListItemIcon>
                          <ListItemText primary={`Line item ${value + 1}`} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </Paper>
            </Grid>
            <Grid xs={12} md={9} item>
              <Paper elevation={8} sx={{ height: "100%" }}>
                <Stack gap={2} p={2}>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <Comment color="primary" />
                    Comentarios
                  </Typography>
                  <Divider />
                  <TextareaAutosize
                    minRows={6}
                    placeholder="Comentarios referentes al estado del Requerimiento."
                    style={{ maxWidth: "100%", resize: "vertical" }}
                  />
                </Stack>
              </Paper>
            </Grid>
            <Grid xs={12} md={3} item>
              <Paper elevation={8} sx={{ height: "100%" }}>
                <Stack gap={2} p={2}>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <Flaky color="success" />
                    Status
                  </Typography>
                  <Divider />
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

export default RequirementDisplay;
