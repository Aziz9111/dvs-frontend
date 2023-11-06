import ResponsiveAppBar from "components/home-page/navBar";
import { TextField, Box, Button, Container, Avatar, Grid } from "@mui/material";
import homePagePic1 from "../home-page/images/dvs-image.png";
import homePagePic2 from "../home-page/images/dvs_image2.png";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleNext1 = () => {
    navigate("/phone");
  };

  return (
    <div>
      <ResponsiveAppBar />

      <Container sx={{ mt: 12 }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "88vh",
              }}
            >
              <Container
                sx={{
                  mt: 4,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid
                  container
                  spacing={1}
                  alignItems="center"
                  direction="column"
                >
                  <Box
                    bgcolor={"#fafafa"}
                    display="flex"
                    borderRadius={4}
                    sx={{
                      width: "90%",
                    }}
                  >
                    <Grid item xs={12} sm={6} margin="16px">
                      <Avatar
                        size="sm"
                        variant="solid"
                        sx={{ backgroundColor: "#004378", color: "white" }}
                      >
                        1
                      </Avatar>
                    </Grid>
                    <Grid item xs={12} sm={6} margin="16px">
                      <Avatar
                        size="sm"
                        variant="solid"
                        sx={{ backgroundColor: "#C8D4EE", color: "white" }}
                      >
                        2
                      </Avatar>
                    </Grid>
                    <Grid item xs={12} sm={6} margin="16px">
                      <Avatar
                        size="sm"
                        variant="solid"
                        sx={{ backgroundColor: "#C8D4EE", color: "white" }}
                      >
                        3
                      </Avatar>
                    </Grid>
                  </Box>
                </Grid>
              </Container>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100vh",
                }}
              >
                <Box
                  bgcolor={"#fafafa"}
                  borderRadius={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <h1 style={{ marginLeft: "4rem", marginTop: "3rem" }}>
                      Personal information
                    </h1>
                    <Grid item xs={12} sm={4} marginRight={16}>
                      <TextField
                        label="Email"
                        required
                        sx={{ mb: 2, width: "200%" }}
                        size="small"
                      />
                      <TextField
                        label="Username"
                        required
                        sx={{ mb: 2, width: "200%" }}
                        size="small"
                      />
                      <TextField
                        label="Last name"
                        required
                        sx={{ mb: 2, width: "200%" }}
                        size="small"
                      />
                      <TextField
                        label="First name"
                        required
                        sx={{ mb: 2, width: "200%" }}
                        size="small"
                      />
                      <TextField
                        label="Password"
                        type="password"
                        required
                        sx={{ mb: 2, width: "200%" }}
                        size="small"
                      />
                      <TextField
                        label="Confirm password"
                        type="password"
                        required
                        sx={{ mb: 2, width: "200%" }}
                        size="small"
                      />
                      <Box>
                        <Button
                          variant="contained"
                          sx={{
                            marginTop: 2,
                            ml: 10,
                            "&:hover": { backgroundColor: "primary.light" },
                            my: 2,
                            backgroundColor: "#004378",
                            color: "white",
                          }}
                          onClick={handleNext1}
                        >
                          Next
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </Container>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "75%",
                flexDirection: "column",
                padding: "24px",
                marginTop: "24px",
              }}
            >
              <img
                src={homePagePic1}
                alt="Logo"
                style={{ width: "350px", height: "auto" }}
              />
              <img
                src={homePagePic2}
                alt="Logo"
                style={{ width: "350px", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Signup;
