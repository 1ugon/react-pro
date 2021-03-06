import React from "react";

import Card, { CardBody, CardMedia, CardMediaDescription } from "./Card";
import Section from "../molecules/Section";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";

import Lambo from "../../assets/lambo.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia, CardMediaDescription },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Titulo</h6>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
          pulvinar.
        </p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={Lambo} />
      <CardBody>
        <Heading>
          <h6>Titulo</h6>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
          pulvinar.
        </p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const onlyMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={Lambo}>
        <CardMediaDescription>
          <h5>Descrição da Imagem</h5>
        </CardMediaDescription>
      </CardMedia>
    </Card>
  </Section>
);
