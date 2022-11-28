import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../../images/film-poster-placeholder.png'
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import { ActorsContext } from "../../../contexts/actorContext";


export default function ActorCard({ actor, action2 }) {
  let action = () => true

  const { favourites, addToFavourites } = useContext(ActorsContext);
 
   if (favourites.find((id) => id === actor.id)) {
     actor.favourite = true;
   } else {
     actor.favourite = false
   }
 
   const handleAddToFavourite = (e) => {
     e.preventDefault();
     addToFavourites(actor);
   };

   if (actor.gender === 1){
      actor.gender = "Female"
   }

   if (actor.gender === 2){
    actor.gender = "Male"
 }

  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          actor.favourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        
        name={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {actor.name}
              
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {actor.gender}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
    {action(actor)}
    <Link to={`/actors/${actor.id}`}>
      <Button variant="outlined" size="medium" color="primary">
        More info ...
      </Button>
    </Link>
  </CardActions>
    </Card>
    
  );
}