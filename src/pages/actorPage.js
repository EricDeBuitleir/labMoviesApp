import React from "react";
import { getActors} from "../api/tmdb-api";
import PageTemplate from '../components/actorComponents/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'


const ActorPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const Actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = Actors.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (actorId) => true 

  return (
    <PageTemplate
      title="Discover Actors"
      actors={Actors}
      action={(actor) => {
        return <AddToFavouritesIcon actor={actor} />
      }}
    />
);
};

export default ActorPage;