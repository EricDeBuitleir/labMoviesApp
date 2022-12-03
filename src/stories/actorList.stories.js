import React from "react";
import Actor from "../components/actorComponents/actorList";
import Sampleactor from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@mui/material/Grid";
import ActorsContextProvider from "../contexts/actorContext";

export default {
  title: "Home Page/Actor",
  component: Actor,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ActorsContextProvider>{Story()}</ActorsContextProvider>,
  ],
};

export const Basic = () => {
  const actors = [
    { ...Sampleactor, id: 1 },
    { ...Sampleactor, id: 2 },
    { ...Sampleactor, id: 3 },
    { ...Sampleactor, id: 4 },
    { ...Sampleactor, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <Actor
        Actors={actors}
        action={(actor) => <AddToFavouritesIcon actor={actor} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
