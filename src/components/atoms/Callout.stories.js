import React from "react";
import styled from "styled-components";

import Callout, { CalloutBody, CalloutActions } from "./Callout";
import Button from "../atoms/Button";

import Speed from "../../svg/speed.svg";

const Image = styled.img`
  width: 30%;
  max-width: 200px;
`;

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça sua matrícula agora mesmo</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor
        mauris sit amet est efficitur, imperdiet rhoncus purus pulvinar.
      </p>
      <CalloutActions>
        <Button color="primary">Matricular</Button>
      </CalloutActions>
    </CalloutBody>
    <Image src={Speed} alt="Mulher mostrando o velocimetro" />
  </Callout>
);
