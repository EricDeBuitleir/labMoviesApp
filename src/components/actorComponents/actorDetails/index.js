import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import { Cake, CakeRounded, CatchingPokemon, LocalHospitalRounded, Person } from "@mui/icons-material";
import { Global } from "@emotion/react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        
      </Paper>
      <Paper component="ul" sx={root}>
        <Chip icon={<Person/>} label={` Known for: ${actor.known_for_department} `} />
        <Chip
          icon={<CakeRounded />}
          label={`Birthday: ${actor.birthday}`}
        />
        <Chip 
       icon={<LocalHospitalRounded />}
       label={`Born in: ${actor.place_of_birth}`}
       />
      </Paper>
      <Paper 
      
        component="ul" 
        sx={root}
      >
        <li>
          <Link to={`/actor/latestActors`}>
          <Button variant="outlined" size="small" color="primary">
          <Chip label={`Known as: ${actor.also_known_as}`}sx={chip} color="primary" />
          </Button>
      </Link>
        </li>
        
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
       <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <actorReviews actor={actor} />
      </Drawer>
    </>
  );
};
export default ActorDetails ;