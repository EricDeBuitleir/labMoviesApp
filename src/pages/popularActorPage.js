import React from "react";
import PageTemplate from "../components/actorComponents/templateActorListPage";
import { getPopularActors} from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavouriteActors'


const PopularActor = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actor = data.results;

  // Redundant, but necessary to avoid app crashing.
  const popular = actor.filter(m => m.favourite)
  localStorage.setItem('popular', JSON.stringify(popular))

  
  return (
    <PageTemplate
      name="Popular Actors"
      actors={actor}
      action={(actor) => {
        return <AddToFavouritesIcon actor={actor} />
      }}
    />
  );
};
export default PopularActor;