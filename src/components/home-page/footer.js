import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

export default function Footer() {
  const handleColorChange = () => {
    // Handle color change logic here if needed
  };

  return (
    <Box
      sx={{
        backgroundColor: "#004378",
        color: "white",
        padding: "20px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: { xs: "20px", md: 0 },
          }}
        >
          <Divider orientation="vertical" flexItem />
        </Box>
        <Divider sx={{ my: 2, width: "100%" }} />
        <List
          size="small"
          orientation="horizontal"
          sx={{
            flexGrow: 0,
            "--ListItem-radius": "8px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ListItem
            nested
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <List>
              <ListItem>
                <ListItemButton sx={{ fontSize: "1rem", whiteSpace: "nowrap" }}>
                  Contact us
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>About us</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Security</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem
            nested
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <List>
              <ListItem>
                <ListItemButton>Link 1</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Link 2</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Link 3</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Link 4</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem
            nested
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <List>
              <ListItem>
                <ListItemButton>Link 1</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Link 2</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Link 3</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Link 4</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
