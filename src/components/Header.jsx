import { useState } from "react";
import {
  ArrowBack,
  AdminPanelSettings,
  ExitToAppOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import img_logo from "../assets/images/white_logo.png";

const Header = () => {
  const { currentUser, logOut } = useAuth();
  const [, setError] = useState({ error: null, type: "info" });
  const [anchorEl, setAnchorEl] = useState(false);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    setError({ error: null, type: "info" });
    try {
      await logOut();
    } catch (err) {
      setError({ error: err, type: "error" });
    }
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <Container>
      <AppBar position="fixed" enableColorOnDark>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
          <img width="90px" style={{ padding: 10 }} src={img_logo} />
          <Typography variant="caption" component="div" sx={{ flexGrow: 1 }} />
          <IconButton
            edge="end"
            disabled={!currentUser}
            color="inherit"
            onClick={handleOpenMenu}
          >
            <AdminPanelSettings />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleLogOut}>
              <ExitToAppOutlined fontSize="small" sx={{ marginRight: 1 }} />{" "}
              Cerrar sesión
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Container>
  );
};

export default Header;
