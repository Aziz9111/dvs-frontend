import {
  Box,
  Container,
  Grid,
  Button,
  TextField,
  Avatar,
  Modal,
  Pagination,
} from "@mui/material";
import WhiteBar from "components/whiteNavBar";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import { useState } from "react";

export default function SelectedElection() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
                  Election title
                </h1>
              </div>
              <div>
                <span></span>
                Election type
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
                  pulvinar lorem. As nec........
                </p>
              </div>
              <div>
                <h1
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    marginTop: "4rem",
                  }}
                >
                  10 days left
                </h1>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} ml={8} mt={4}>
              <div>10 Candidates</div>
              <div style={{ marginTop: "8px" }}>2 votes allowed per user</div>
              <div style={{ marginTop: "8px" }}>17 May 2022 - 27 May 2022</div>
              <div
                style={{
                  marginTop: "4rem",
                  fontWeight: "bold",
                  color: "#004378",
                  textDecoration: "underline",
                }}
              >
                2 View results
              </div>
              <Button
                onClick={handleOpen}
                variant="contained"
                color="success"
                sx={{
                  mt: 2,
                  mr: "3rem",
                  "&:hover": { backgroundColor: "primary.light" },
                  color: "white",
                }}
              >
                Submit vote
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Container sx={{ mt: 12, p: 8 }}>
                  <Box bgcolor="white" width="75%">
                    <Grid container spacing={0} direction="row" m={4}>
                      <Grid item xs={6} sm={6}>
                        <h1
                          style={{
                            color: "#004378",
                            fontWeight: "bold",
                          }}
                        >
                          Election title
                        </h1>
                        <Box
                          sx={{
                            mt: 8,
                            borderBottom: "2px solid #004378",
                            width: "150%",
                          }}
                        >
                          <p>Candidate name</p>
                        </Box>
                      </Grid>

                      <Grid item xs={6} sm={6} marginTop={4}>
                        <span>1 Selected</span>
                        <div>
                          <Button
                            variant="contained"
                            color="success"
                            sx={{
                              mt: "16rem",
                              mr: "3rem",
                              mb: "2rem",
                              "&:hover": { backgroundColor: "primary.light" },
                              color: "white",
                            }}
                          >
                            Confirm vote
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  </Box>
                </Container>
              </Modal>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{ mt: 8 }} alignItems="center" justifyContent="center">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Grid item xs={12} sm={6}>
            <TextField
              label="Search"
              sx={{ ml: 16, width: "60%" }}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3>1 Selected</h3>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mt: 8 }} alignItems="center" justifyContent="center">
        <Box bgcolor="#fafafa">
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={2} sm={2} mr={1}>
              <Avatar
                variant="solid"
                sx={{ color: "black", width: 150, height: 150 }}
              >
                image
              </Avatar>
            </Grid>
            <Grid item xs={4} sm={4} mr={34}>
              <div>
                <h3 style={{ fontWeight: "bold", color: "#004378" }}>
                  Candidate name
                </h3>
              </div>
              <div>
                <span style={{ textDecoration: "underline" }}>
                  View profile
                </span>
              </div>
            </Grid>
            <Grid item xs={4} sm={2}>
              <RadioButtonCheckedOutlinedIcon
                fontSize="large"
                style={{ color: "green" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{ mt: 8 }} alignItems="center" justifyContent="center">
        <Box bgcolor="#fafafa">
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={2} sm={2} mr={1}>
              <Avatar
                variant="solid"
                sx={{ color: "black", width: 150, height: 150 }}
              >
                image
              </Avatar>
            </Grid>
            <Grid item xs={4} sm={4} mr={34}>
              <div>
                <h3 style={{ fontWeight: "bold", color: "#004378" }}>
                  Candidate name
                </h3>
              </div>
              <div>
                <span style={{ textDecoration: "underline" }}>
                  View profile
                </span>
              </div>
            </Grid>
            <Grid item xs={4} sm={2}>
              <RadioButtonCheckedOutlinedIcon
                fontSize="large"
                style={{ color: "grey" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{ mt: 8 }} alignItems="center" justifyContent="center">
        <Box bgcolor="#fafafa">
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={2} sm={2} mr={1}>
              <Avatar
                variant="solid"
                sx={{ color: "black", width: 150, height: 150 }}
              >
                image
              </Avatar>
            </Grid>
            <Grid item xs={4} sm={4} mr={34}>
              <div>
                <h3 style={{ fontWeight: "bold", color: "#004378" }}>
                  Candidate name
                </h3>
              </div>
              <div>
                <span style={{ textDecoration: "underline" }}>
                  View profile
                </span>
              </div>
            </Grid>
            <Grid item xs={4} sm={2}>
              <RadioButtonCheckedOutlinedIcon
                fontSize="large"
                style={{ color: "grey" }}
              />
            </Grid>
          </Grid>
        </Box>
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
    </>
  );
}
