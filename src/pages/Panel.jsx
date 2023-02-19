import {
  DoneAllRounded,
  HouseOutlined,
  PendingActions,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import PendingRequirementsDataGrid from "../components/requirements/PendingRequirementsDataGrid";

const Panel = () => {
  return (
    <Container maxWidth="xl" className="pageContainer">
      <Box className="centerChild animate__animated animate__fadeIn animate__faster">
        <Paper elevation={8} sx={{ flex: 1, width: "100%" }}>
          <Stack gap={2} p={2}>
            <Typography variant="h6" display="flex" alignItems="center" gap={1}>
              <HouseOutlined color="primary" fontSize="large"/>
              Requerimientos
            </Typography>
            <Divider />
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Stack gap={2}>
                    <Typography
                      variant="body2"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <PendingActions color="info" />
                      Pendientes
                    </Typography>
                    <Divider />
                    <PendingRequirementsDataGrid />
                  </Stack>
                </Paper>
              </Grid>
              <Grid xs={12} item>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Stack gap={2}>
                    <Typography
                      variant="body2"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <DoneAllRounded color="success" />
                      Completados
                    </Typography>
                    <Divider />
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
};
export default Panel;
