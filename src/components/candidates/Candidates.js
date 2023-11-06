import {
  Avatar,
  Box,
  Container,
  Grid,
  Pagination,
  TextField,
} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import WhiteBar from "components/whiteNavBar";
import Footer from "components/home-page/footer";

export default function Candidates() {
  return (
    <>
      <WhiteBar />
      <Container sx={{ mt: 8 }}>
        <Grid container spacing={4} alignItems="center" direction="row">
          <Grid item xs={12} sm={12}>
            <h1 style={{ color: "#004378" }}>Candidates</h1>
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              label="Search"
              sx={{ mb: 2, width: "80%", marginRight: "16px" }}
              size="medium"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              label="Sort by"
              sx={{ mb: 2, marginRight: "16px" }}
              size="medium"
              InputProps={{
                endAdornment: (
                  <KeyboardArrowDownOutlinedIcon style={{ color: "gray" }} />
                ),
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Grid container spacing={4} alignItems="center" direction="row">
        <Container sx={{ mt: 12 }}>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="#fafafa">
              <Grid container spacing={4}>
                <Grid item xs={2} sm={2} mr={1} ml="2rem">
                  <Avatar
                    variant="solid"
                    sx={{ color: "black", width: 100, height: 100, mb: "2rem" }}
                  >
                    image
                  </Avatar>
                </Grid>
                <Grid item xs={6} sm={6} ml="2rem">
                  <div>
                    <h3
                      style={{
                        fontWeight: "bold",
                        color: "#004378",
                        textDecoration: "underline",
                      }}
                    >
                      Candidate name
                    </h3>
                  </div>
                  <div>
                    <span>Firstname Lastname</span>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Container>
        <Container sx={{ mt: 12 }}>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="#fafafa">
              <Grid container spacing={4}>
                <Grid item xs={2} sm={2} mr={1} ml="2rem">
                  <Avatar
                    variant="solid"
                    sx={{ color: "black", width: 100, height: 100, mb: "2rem" }}
                  >
                    image
                  </Avatar>
                </Grid>
                <Grid item xs={6} sm={6} ml="2rem">
                  <div>
                    <h3
                      style={{
                        fontWeight: "bold",
                        color: "#004378",
                        textDecoration: "underline",
                      }}
                    >
                      Candidate name
                    </h3>
                  </div>
                  <div>
                    <span>Firstname Lastname</span>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Container>
        <Container sx={{ mt: 12 }}>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="#fafafa">
              <Grid container spacing={4}>
                <Grid item xs={2} sm={2} mr={1} ml="2rem">
                  <Avatar
                    variant="solid"
                    sx={{ color: "black", width: 100, height: 100, mb: "2rem" }}
                  >
                    image
                  </Avatar>
                </Grid>
                <Grid item xs={6} sm={6} ml="2rem">
                  <div>
                    <h3
                      style={{
                        fontWeight: "bold",
                        color: "#004378",
                        textDecoration: "underline",
                      }}
                    >
                      Candidate name
                    </h3>
                  </div>
                  <div>
                    <span>Firstname Lastname</span>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Container>
        <Container sx={{ mt: 12 }}>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="#fafafa">
              <Grid container spacing={4}>
                <Grid item xs={2} sm={2} mr={1} ml="2rem">
                  <Avatar
                    variant="solid"
                    sx={{ color: "black", width: 100, height: 100, mb: "2rem" }}
                  >
                    image
                  </Avatar>
                </Grid>
                <Grid item xs={6} sm={6} ml="2rem">
                  <div>
                    <h3
                      style={{
                        fontWeight: "bold",
                        color: "#004378",
                        textDecoration: "underline",
                      }}
                    >
                      Candidate name
                    </h3>
                  </div>
                  <div>
                    <span>Firstname Lastname</span>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Grid>
      <Pagination
        count={10}
        ariant="outlined"
        shape="rounded"
        sx={{
          mt: 12,
          mb: 4,
          ml: 4,
          "& .MuiPaginationItem-root": {
            fontSize: "1.2rem", // Adjust the font size for the pagination items
          },
          "& .MuiPaginationItem-page.Mui-selected": {
            backgroundColor: "#004378", // Change the background color for the selected page
            color: "white", // Change the text color for the selected page
          },
        }}
      />
      <Footer />
    </>
  );
}
