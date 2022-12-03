import React from "react";
import ActorDetails from "../components/actorComponents/actorDetails";
import SampleActor from "./sampleData";
import { MemoryRouter } from "react-router";
import ActorsContextProvider from "../contexts/actorContext";

export default {
  title: "Actor Details Page/actorDetails",
  component: ActorDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ActorsContextProvider>{Story()}</ActorsContextProvider>,
  ],
};

export const Basic = () => <ActorDetails actor={SampleActor} />;

Basic.storyName = "Default";
