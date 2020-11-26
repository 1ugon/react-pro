import React from "react";

import Hero from "../components/Hero";
import Cuba from "./assets/cuba.jpg";
import Volks from "./assets/volks.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sua liberdade para ir e vir" image={Volks}>
    <ul>
      <li>A auto escola lider em aprovacao</li>
      <li>A auto escola lider em aprovacao 2</li>
      <li>A auto escola lider em aprovacao 3</li>
    </ul>
  </Hero>
);

export const withList = () => <Hero title="TESTE" image={Cuba}></Hero>;
