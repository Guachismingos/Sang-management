import { Box, Container, Paper, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

const RequirementDisplay = () => {
  const { id } = useParams();

  return (
    <Container maxWidth={false} className="pageContainer">
      <Box className="centerChild animate__animated animate__fadeIn animate__faster">
        <Container maxWidth="md">
            <Stack
              sx={{ py: 5, px: 2 }}
              justifyContent="center"
              display="flex"
              alignItems="center"
              spacing={2}
            >
              {id}
          <Paper elevation={8}>
          </Paper>
            </Stack>
        </Container>
      </Box>
    </Container>
  );
};

export default RequirementDisplay;
