import { Avatar, Box, Container, Grid } from "@mui/material";
import WhiteBar from "components/whiteNavBar";
import Footer from "components/home-page/footer";

export default function SelectedCandidate() {
  return (
    <>
      <WhiteBar />
      <Container sx={{ mt: 12 }}>
        <Box bgcolor={"#fafafa"}>
          <Grid container spacing={0} direction="row">
            <Grid item xs={6} sm={6} ml={8}>
              <div>
                <h1
                  style={{
                    color: "#004378",
                    fontWeight: "bold",
                  }}
                >
                  Candidate name
                </h1>
              </div>
              <div>First name</div>
              <div style={{ marginTop: "12px" }}>Last name</div>
              <div style={{ marginTop: "12px" }}>candidate@gmail.com</div>
              <div style={{ marginTop: "12px" }}>Candidate ID</div>
              <div
                style={{
                  fontWeight: "bold",
                  color: " green",
                  marginTop: "12px",
                }}
              >
                2 Elections
              </div>
            </Grid>
            <Grid item xs={6} sm={4} ml={8} mt={4}>
              <Avatar
                variant="solid"
                sx={{ color: "black", width: 200, height: 200, mb: "2rem" }}
              >
                image
              </Avatar>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{ mt: 8, borderBottom: "2px solid #004378" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={4} sm={1.5} marginBottom="12px">
            <h3
              style={{
                color: "#004378",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Election title
            </h3>
          </Grid>
          <Grid item xs={4} sm={1.5} marginBottom="12px">
            Election type
          </Grid>
        </Grid>

        <Grid container spacing={12} alignItems="center">
          <Grid item xs={4} sm={4} marginBottom="12px">
            10 Candidates
          </Grid>
          <Grid item xs={7} sm={7}>
            <p>
              Lorem ipsum dolorsit amen, consectetur adipiscing elit. Nun
              maxims, nulls utcommodo sagittis, sapien dui mattis dui, non
              pulvinar lorem As nec........
            </p>
          </Grid>
          <Grid item xs={1} sm={1} marginBottom="12px">
            <h3
              style={{
                color: "green",
                fontWeight: "bold",
              }}
            >
              Started
            </h3>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center" marginBottom="24px">
          <Grid item xs={4} sm={4}>
            17 May 2022 - 27 May 2022
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mt: 8, borderBottom: "2px solid #004378", mb: "12rem" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={4} sm={1.5} marginBottom="12px">
            <h3
              style={{
                color: "#004378",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Election title
            </h3>
          </Grid>
          <Grid item xs={4} sm={1.5} marginBottom="12px">
            Election type
          </Grid>
        </Grid>

        <Grid container spacing={12} alignItems="center">
          <Grid item xs={4} sm={4} marginBottom="12px">
            10 Candidates
          </Grid>
          <Grid item xs={7} sm={7}>
            <p>
              Lorem ipsum dolorsit amen, consectetur adipiscing elit. Nun
              maxims, nulls utcommodo sagittis, sapien dui mattis dui, non
              pulvinar lorem As nec........
            </p>
          </Grid>
          <Grid item xs={1} sm={1} marginBottom="12px">
            <h3
              style={{
                color: "red",
                fontWeight: "bold",
              }}
            >
              End
            </h3>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center" marginBottom="24px">
          <Grid item xs={4} sm={4}>
            17 May 2022 - 27 May 2022
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
