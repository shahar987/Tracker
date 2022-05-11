import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const ToolbarMain = () => {
  const navigate = useNavigate();

  const signOut = () => {
    /**
     * @TODO delete localStorage
     **/
    navigate("/login");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
          <HomeIcon fontSize="large" />
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, fontWeight: 600 }}
          >
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              Trackr
            </Link>
          </Typography>
          <Button
            style={{ textTransform: "none" }}
            color="inherit"
            endIcon={<LogoutIcon />}
          >
            <span style={{ fontSize: 18 }} onClick={signOut}>
              Sign out
            </span>
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default ToolbarMain;
