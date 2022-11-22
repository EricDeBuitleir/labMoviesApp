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
import { TVsContext } from "../../../contexts/TVsContext";

export default function TVCard({ TV, action }) {

  const { favourites, addToFavourites } = useContext(TVsContext);
 
   if (favourites.find((id) => id === TV.id)) {
     TV.favourite = true;
   } else {
     TV.favourite = false
   }
 
   const handleAddToFavourite = (e) => {
     e.preventDefault();
     addToFavourites(TV);
   };
 

  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          TV.favourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        
        title={
          <Typography variant="h5" component="p">
            {TV.title}{" "}
          </Typography>
        }
      />
      
      <CardMedia
        sx={{ height: 500 }}
        image={
          TV.poster_path
            ? `https://image.tmdb.org/t/p/w500/${TV.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {TV.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {TV.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
    {action(TV)}
    <Link to={`/TVs/${TV.id}`}>
      <Button variant="outlined" size="medium" color="primary">
        More Info ...
      </Button>
    </Link>
  </CardActions>
    </Card>
    
  );
}