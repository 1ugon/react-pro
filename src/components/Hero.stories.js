import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import Cuba from "../stories/assets/cuba.jpg";
import Volks from "../stories/assets/volks.png";
import Heading from "./Heading";
import Button from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={Volks}>
    <Heading>
      <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    </Heading>
    <p>{text("Text", "A auto escola lider em aprovacao")}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={Cuba}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong> <br />
        para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>A auto escola lider em aprovacao</li>
      <li>A auto escola lider em aprovacao 2</li>
      <li>A auto escola lider em aprovacao 3</li>
    </ul>
    <Button color="primary" variant="outlined">
      Matricule-se agora
    </Button>
  </Hero>
);
