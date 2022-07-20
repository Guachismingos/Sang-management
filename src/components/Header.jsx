import { Fragment, useState } from "react";
import {
  ArrowBack,
  SettingsOutlined,
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
const Header = () => {
  const { currentUser, logOut } = useAuth();
  const [setError] = useState({ error: null, type: "info" });
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
          <Typography variant="h6" sx={{ flexGrow: 1, ml: 1 }}>
            Grupo Sang S.A
          </Typography>
          {currentUser && (
            <Fragment>
              <IconButton color="inherit" edge="end" onClick={handleOpenMenu}>
                <SettingsOutlined />
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
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Container>
  );
};

export default Header;
