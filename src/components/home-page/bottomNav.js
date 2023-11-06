import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="Contact us" />
        <BottomNavigationAction label="About us" />
        <BottomNavigationAction label="Security" />
      </BottomNavigation>
    </Box>
  );
}
