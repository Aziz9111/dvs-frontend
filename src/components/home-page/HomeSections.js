import { Box, Button, Container, TextField, Grid } from "@mui/material";
import homePagePic1 from "./images/dvs-image.png";
import homePagePic2 from "./images/dvs_image2.png";
import homePagePic3 from "./images/dvs_image3.png";
import homePagePic4 from "./images/dvs-image5.jpeg";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./navBar";
import Footer from "./footer";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

const text1 = (
  <div>
    <h1>Step into the future of voting with CypVote</h1>
    <p>
      Enhance transparency and revolutionize elections with our digital voting
      platform.
    </p>
  </div>
);
const text2 = (
  <div>
    <h1>
      Say goodbye to paper ballots and hello to secure, convenient, and
      accessible voting from anywhere.
    </h1>
  </div>
);
const text3 = (
  <div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <CheckBoxOutlinedIcon />
      <p>Cast your vote from the comfort of your home</p>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <CheckBoxOutlinedIcon />
      <p>Trust in our state-of-the-art security measures</p>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <CheckBoxOutlinedIcon />
      <p>Accessible and inclusive for all voters</p>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <CheckBoxOutlinedIcon />
      <p>Keep track of elections</p>
    </div>
  </div>
);
const text4 = (
  <div>
    <h1>Contact us</h1>
    <TextField label="Email" sx={{ mb: 2, width: "100%" }} size="small" />
    <TextField label="Name" sx={{ mb: 2, width: "100%" }} size="small" />
    <TextField
      label="Message"
      multiline
      rows={4}
      variant="outlined"
      sx={{
        mb: 2,
        width: "100%",
      }}
      size="large"
    />
    <Button
      variant="contained"
      sx={{
        marginTop: 2,
        "&:hover": { backgroundColor: "primary.light" },
        my: 2,
        backgroundColor: "#004378",
        color: "white",
      }}
    >
      Send message
    </Button>
  </div>
);

function HomeSections() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box p={3}>{text1}</Box>
            <Button
              variant="contained"
              onClick={handleSignup}
              sx={{
                mt: 2,
                "&:hover": { backgroundColor: "primary.light" },
                backgroundColor: "#004378",
                color: "white",
              }}
            >
              Join us
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={homePagePic1}
              alt="Logo"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
      <Box bgcolor={"#fafafa"}>
        <Container sx={{ mt: 4 }}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6}>
              <img
                src={homePagePic2}
                alt="Logo"
                style={{ width: "65%", height: "45%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={3}>{text2}</Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box p={3}>{text3}</Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={homePagePic3}
              alt="Logo"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
      <Box bgcolor={"#fafafa"}>
        <Container sx={{ mt: 4 }}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6}>
              <img
                src={homePagePic4}
                alt="Logo"
                style={{ width: "75%", height: "60%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={3}>{text4}</Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default HomeSections;
