import React, { useState } from "react";
import Data from "../../components/ClientList/Data";
import Card from "../../components/ClientList/Card";
import Buttons from "../../components/ClientList/Buttons";
import Typography from "@mui/material/Typography";

const ClientsPage = () => {
  const [item, setItem] = useState(Data);

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <>
      <div>
        <Typography
          sx={{ fontFamily: "Roboto", marginTop: 2, marginBottom: 2 }}
          variant="h2"
          align="center"
        >
          TRACKR TEST RESULTS
        </Typography>
        <Buttons filterItem={filterItem} setItem={setItem} />
        <Card item={item} />
      </div>
    </>
  );
};

export default ClientsPage;
