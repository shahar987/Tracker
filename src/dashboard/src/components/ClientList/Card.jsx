import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

const ActionAreaCard = ({ filtered }) => {
  var style = "";

  return (
    <>
      <div style={{ padding: 5 }}>
        <Grid container rowSpacing={1} columnSpacing={1}>
          {filtered.map((card) => {
            if (card.error_number > 0) {
              style = "#dc3545";
            } else {
              style = "#28a745";
            }
            return (
              <Grid key={card.name + card.ip} item xs={3}>
                  <Card style={{ backgroundColor: style }}>
                  
                    <CardContent>
                      {/* title */}
                      <Typography
                        style={{ fontWeight: 800 }}
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                      <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={"/client"}
                      state={{name: card.client_name,
                              ip: card.ip}}
                      >
                        {card.client_name}
                        </Link>
                      </Typography>
                      {/* Ip address */}
                      <Typography>IP: {card.ip}</Typography>
                      {/* Number of problems */}
                      <Typography>Number of errors: {card.error_number}</Typography>
                    </CardContent>
                  </Card>
                
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default ActionAreaCard;