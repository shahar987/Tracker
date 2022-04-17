import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

const ActionAreaCard = ({ item }) => {
  var style = "";

  return (
    <>
      <div style={{ padding: 5 }}>
        <Grid container rowSpacing={1} columnSpacing={1}>
          {item.map((card) => {
            if (card.category === "ERROR") {
              style = "#dc3545";
            } else {
              style = "#28a745";
            }
            return (
              <Grid item xs={3}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  <Card style={{ backgroundColor: style }} key={card.id}>
                    <CardContent>
                      {/* title */}
                      <Typography
                        style={{ fontWeight: 800 }}
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        {card.title}
                      </Typography>
                      {/* Ip address */}
                      <Typography>{card.desc}</Typography>
                      {/* Number of problems */}
                      <Typography>{card.desc2}</Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default ActionAreaCard;