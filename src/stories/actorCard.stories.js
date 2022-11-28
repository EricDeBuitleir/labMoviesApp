import React from "react";
import ActorCard from "../components/actorComponents/actorCard";
import Sampleactor from "./sampleData";
import { MemoryRouter } from "react-router";
import ActorsContextProvider from "../contexts/actorsContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "Actor Page/actorCard",
  component: ActorCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ActorsContextProvider>{Story()}</ActorsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <actorCard
      actor={Sampleactor}
      action={(actor) => <AddToFavouritesIcon actor={actor} />}
      taging={(actor) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoProfile = { ...Sampleactor, profile_path: undefined };
  return (
    <actorCard
      actor={sampleNoProfile}
      action={(actor) => <AddToFavouritesIcon actor={actor} />}
      taging={(actor) => null}
    />
  );
};
Exceptional.storyName = "exception";
