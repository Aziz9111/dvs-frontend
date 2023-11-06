import { Container, Grid, Pagination, TextField } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import WhiteBar from "components/whiteNavBar";
import Footer from "components/home-page/footer";

function Elections() {
  return (
    <>
      <WhiteBar />
      <Container sx={{ mt: 8 }}>
        <Grid container spacing={4} alignItems="center" direction="row">
          <Grid item xs={12} sm={12}>
            <h1 style={{ color: "#004378" }}>Elections</h1>
          </Grid>
          <Grid item xs={4} sm={6}>
            <TextField
              label="Search"
              sx={{ mb: 2, width: "80%", marginRight: "16px" }}
              size="medium"
            />
          </Grid>
          <Grid item xs={4} sm={3}>
            <TextField
              label="Status"
              sx={{ mb: 2, marginRight: "16px" }}
              size="medium"
              InputProps={{
                endAdornment: (
                  <KeyboardArrowDownOutlinedIcon style={{ color: "gray" }} />
                ),
              }}
            />
          </Grid>{" "}
          <Grid item xs={4} sm={3}>
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
                  color: "orange",
                  fontWeight: "bold",
                }}
              >
                Pending
              </h3>
            </Grid>
          </Grid>
          <Grid container spacing={4} alignItems="center" marginBottom="24px">
            <Grid item xs={4} sm={4}>
              17 May 2022 - 27 May 2022
            </Grid>
          </Grid>
        </Container>
      </Container>
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

export default Elections;
