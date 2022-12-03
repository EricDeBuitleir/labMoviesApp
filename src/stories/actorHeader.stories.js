import React from "react";
import ActorHeader from "../components/actorComponents/headerActor";
import SampleActor from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "actor Details Page/actorHeader",
  component: ActorHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <actorHeader actor={SampleActor} />;

Basic.storyName = "Default";
