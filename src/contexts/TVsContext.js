import React, { useState } from "react";


export const TVsContext = React.createContext(null);

const TVsContextProvider = (props) => {
  const [favourites, setFavourites ] = useState( [] )
  const [myReviews, setMyReviews] = useState ([])
  const [mustWatch, setMustWatch] = useState ([])

  const addToFavourites = (TV) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(TV.id)) {
      newFavourites.push(TV.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (TV) => {
    setFavourites( favourites.filter(
      (mId) => mId !== TV.id
    ) )
  };

    const addToMustWatch = (TV) => {
    let newMustWatch = [...mustWatch];
    if (!mustWatch.includes(TV.id)) {
      newMustWatch.push(TV.id);
    }
    setMustWatch(newMustWatch);
  };
  

    const addReview = (TV, review) => {
      setMyReviews( {...myReviews, [TV.id]: review } )
    };

    return (
      <TVsContext.Provider
        value={{
          favourites,
          addToFavourites,
          removeFromFavourites,
          addReview,
          addToMustWatch,
        }}
      >
        {props.children}
      </TVsContext.Provider>
    );
  };
  
  export default TVsContextProvider;