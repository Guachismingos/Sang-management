import { createTheme, experimental_sx } from "@mui/material";
import { grey, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[300],
    },
    background: {
      paper: grey[200],
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: experimental_sx({
          width: "100%",
        }),
      },
    },
  },
});

export default theme;
