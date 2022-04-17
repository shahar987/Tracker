import React, { useState } from "react";
import Data from "./Data";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ErrorIcon from "@mui/icons-material/Error";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

export const manualFilterData = (key, filterItem, setItem) => {
  var carcat = "ALL"; // default --> key === 2

  if (key === 2) {
    // ALL
    setItem(Data);
    return;
  }

  if (key === 0) {
    carcat = "OK";
  } else if (key === 1) {
    carcat = "ERROR";
  }

  return (
    <div>
      {Data.filter((item) => item.category === carcat).map((filteredItem) => (
        <li key={filteredItem.id}>{filterItem(filteredItem.category)}</li>
      ))}
    </div>
  );
};

const Buttons = ({ filterItem, setItem }) => {
  const [value, setValue] = useState(2);

  manualFilterData(filterItem, setItem);
  const filterData = (key) => {
    var carcat = "ALL"; // default --> key === 2

    if (key === 2) {
      // ALL
      setItem(Data);
      return;
    }

    if (key === 0) {
      carcat = "OK";
    } else if (key === 1) {
      carcat = "ERROR";
    }

    return (
      <div>
        {Data.filter((item) => item.category === carcat).map((filteredItem) => (
          <li key={filteredItem.id}>{filterItem(filteredItem.category)}</li>
        ))}
      </div>
    );
  };

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
          filterData(newValue);
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
