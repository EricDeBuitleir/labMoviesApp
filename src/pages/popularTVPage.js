import React from "react";
import PageTemplate from "../components/tvComponents/templateTVListPage";
import { getPopularTVs} from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'


const PopularTV = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularTVs)

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
    title="Popular Shows"
    TVs={tv}
    action={(tv) => {
      return <AddToFavouritesIcon TVs={tv} />
    }}
  />
);
};
export default PopularTV;