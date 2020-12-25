import React from "react";
import styled from "styled-components";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Section from "../molecules/Section";
import Grid from "../atoms/Grid";
import Footer from "../organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "../atoms/Card";
import BreadCrumb from "../atoms/BreadCrumb";

import Cuba from "../../assets/cuba.jpg";
import AboutImg from "../../svg/about.svg";
import Inst1 from "../../assets/instructors/inst1.jpg";
import Inst2 from "../../assets/instructors/inst2.jpg";
import Inst3 from "../../assets/instructors/inst3.jpg";
import Inst4 from "../../assets/instructors/inst4.jpg";
import Inst5 from "../../assets/instructors/inst5.jpg";
import Inst6 from "../../assets/instructors/inst6.jpg";

const Image = styled.img`
  width: 100%;
  max-width: 380px;
`;

const instructors = [
  {
    id: 1,
    name: "Thor",
    avatar: Inst1,
  },
  {
    id: 2,
    name: "Mel",
    avatar: Inst2,
  },
  {
    id: 3,
    name: "Bolinha",
    avatar: Inst3,
  },
  {
    id: 4,
    name: "Mike",
    avatar: Inst4,
  },
  {
    id: 5,
    name: "Emmy",
    avatar: Inst5,
  },
  {
    id: 6,
    name: "Bob",
    avatar: Inst6,
  },
];

const About = () => (
  <>
    <Hero image={Cuba}>
      <Heading>
        <h1>Auto Escola</h1>
      </Heading>
      <BreadCrumb
        items={[{ label: "Início", link: "/" }, { label: "Sobre" }]}
      />
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar.
          </p>
          <center>
            <Image
              src={AboutImg}
              alt="Um prédio com alguns carros passando em frente"
            />
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar.
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar.
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
      <Grid sm={2} md={3} lg={4}>
        {instructors.map((instructor) => (
          <Card key={instructor.id}>
            <CardMedia image={instructor.avatar}>
              <CardMediaDescription>
                <h5>{instructor.name}</h5>
              </CardMediaDescription>
            </CardMedia>
          </Card>
        ))}
      </Grid>
    </Section>
    <Footer />
  </>
);

export default About;
