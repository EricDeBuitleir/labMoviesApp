import React from "react";
import PageTemplate from "../components/actorComponents/templateActorListPage";
import { getPopularActors} from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';


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
  const favourites = actor.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  
  return (
    <PageTemplate
      name="Popular Actors"
      actors={actor}
    />
  );
};
export default PopularActor;