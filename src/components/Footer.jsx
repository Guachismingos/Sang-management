import { AppBar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }} enableColorOnDark>
      <Typography variant="caption" p={0.5}>
        <small>
          Sistema administrativo de requerimientos, Grupo SANG S.A &copy; 2022.
        </small>
      </Typography>
    </AppBar>
  );
};

export default Footer;
