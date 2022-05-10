import React, { useState, useEffect } from "react";
import ActionAreaCard from "../../components/ClientList/Card";
import Buttons from "../../components/ClientList/Buttons";
import Typography from "@mui/material/Typography";
import axios from 'axios';



const ClientsPage = () => {
  const [item, setItem] = useState([]);
  const [filtered, setFiltered] = useState(item);
  
  useEffect(() => axios.get(`http://127.0.0.1:8000/card/mix`).then((response) => {
    //console.log(response)
    console.log(typeof(response.data))
    setItem(response.data)
  }), [])
  console.log(typeof(item))

  const filterItem = (curcat) => {
    if (curcat === 0 ) {
      const newItem = item.filter((newVal) => {
        return newVal.error_number === 0;
      });
      console.log(newItem)
      setFiltered(newItem);
    }
    else if (curcat === 1) {
      const newItem = item.filter((newVal) => {
        return newVal.error_number !== 0;
      });
      setFiltered(newItem);
    }
    else {
      setFiltered(item);
    }
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
        <Buttons filterItem={filterItem}/>
        <ActionAreaCard filtered={filtered} />
      </div>
    </>
  );
};

export default ClientsPage;
