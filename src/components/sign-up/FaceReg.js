import ResponsiveAppBar from "components/home-page/navBar";
import { Box, Button, Container, Avatar, Grid } from "@mui/material";
import homePagePic1 from "../home-page/images/dvs-image.png";
import homePagePic2 from "../home-page/images/dvs_image2.png";

function FaceReg() {
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
                height: "65vh",
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
                        sx={{ backgroundColor: "#C8D4EE", color: "white" }}
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
                        sx={{ backgroundColor: "#004378", color: "white" }}
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
                    height: "75%",
                    width: "85%",
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <h1 style={{ marginTop: "3rem" }}>Face ID Recognition</h1>
                    <Grid item xs={12} sm={6}>
                      <Box>
                        <Button
                          variant="contained"
                          sx={{
                            marginTop: 2,
                            "&:hover": { backgroundColor: "primary.light" },
                            my: 2,
                            width: 200,
                            backgroundColor: "#004378",
                            color: "white",
                          }}
                        >
                          Go to Face ID Page
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

export default FaceReg;
