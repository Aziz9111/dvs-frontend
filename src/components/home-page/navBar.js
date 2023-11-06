import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ height: "100px", backgroundColor: "#004378" }}
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              ></Typography>

              <Box>
                <Button
                  onClick={() => navigate("/")}
                  sx={{ mx: 2, color: "white", lineHeight: "100px" }}
                >
                  Home
                </Button>
                <Button
                  onClick={() => navigate("/signup")}
                  sx={{ mx: 2, color: "white", lineHeight: "100px" }}
                >
                  Signup
                </Button>
                <Button
                  /* onClick={() => navigate("/contactus")} */
                  sx={{ mx: 2, color: "white", lineHeight: "100px" }}
                >
                  Contact Us
                </Button>
                <Button
                  /* onClick={() => navigate("/aboutus")} */
                  sx={{ mx: 2, color: "white", lineHeight: "100px" }}
                >
                  About Us
                </Button>
                {/* Add more buttons for other pages here */}
              </Box>

              <Box>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} />
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                ></Menu>
              </Box>
            </Toolbar>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
