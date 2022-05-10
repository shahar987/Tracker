import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ErrorIcon from "@mui/icons-material/Error";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

export const manualFilterData = (key, filterItem) => {
  var carcat = "ALL"; // default --> key === 2

  if (key === 2) {
   filterItem(2)
  }

  if (key === 0) {
    filterItem(0)

  } else if (key === 1) {
    filterItem(1)
  }

 
};

const Buttons = (props) => {
  const [value, setValue] = useState(2);

  return (
    <Box sx={{ align: "center" }}>
      <BottomNavigation
        sx={{
          "& .Mui-selected, .Mui-selected > svg": {
            fontWeight: 600,
          },
        }}
        style={{ backgroundColor: "#e0e0e0", marginBottom: 5 }}
        showLabels={true}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          manualFilterData(newValue, props.filterItem);
        }}
      >
        <BottomNavigationAction
          sx={{
            "& .Mui-selected, .Mui-selected > svg": {
              color: "#28a745",
            },
          }}
          label="OK"
          icon={<GppGoodIcon style={{ color: "#28a745" }} />}
        />
        <BottomNavigationAction
          sx={{
            "& .Mui-selected, .Mui-selected > svg": {
              color: "#dc3545",
            },
          }}
          label="ERROR"
          icon={<ErrorIcon style={{ color: "#dc3545" }} />}
        />
        <BottomNavigationAction
          sx={{
            "& .Mui-selected, .Mui-selected > svg": {
              color: "#000",
            },
          }}
          label="ALL"
          icon={<ChangeCircleIcon style={{ color: "#000" }} />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Buttons;
