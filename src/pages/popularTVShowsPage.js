import React from "react";
import PageTemplate from "../components/movieComponents/templateMovieListPage";
import { getPopularShows} from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';


const PopularShows = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tv = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = tv.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  
  return (
    <PageTemplate
      title="Popular TV Shows"
      tv={tv}
    />
  );
};
export default PopularShows;