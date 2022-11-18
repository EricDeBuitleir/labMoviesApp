import React from "react";
import TV from "../TVCard";
import Grid from "@mui/material/Grid";

const TVList = ( {TVs, action }) => {
  let TVCards = TVs.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TV key={m.id} TV={m} action={action} />
    </Grid>
  ));
  return TVCards;
};

export default TVList;