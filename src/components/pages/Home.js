import React from "react";
// import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import Grid from "../atoms/Grid";
import Feature from "../atoms/Feature";
import Section from "../molecules/Section";
import Footer from "../organisms/Footer";
import ProductGrid from "../organisms/ProductGrid";
import Accordion from "../atoms/Accordion/Accordion";
import AccordionGroup from "../atoms/Accordion/AccordionGroup";

import Cuba from "../../assets/cuba.jpg";
import Carro from "../../assets/carro.jpg";
import Moto1 from "../../assets/moto1.jpg";
import Moto2 from "../../assets/moto2.jpg";
import Caminhao from "../../assets/caminhao.jpg";
import Aula from "../../assets/aula.jpg";
import Forest from "../../assets/forest.mp4";

const products = [
  {
    id: 1,
    title: "1ª Habilitação Carro e Moto",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Carro,
  },
  {
    id: 2,
    title: "1ª Habilitação Carro",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Moto1,
  },
  {
    id: 3,
    title: "1ª Habilitação Moto",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Moto2,
  },
  {
    id: 4,
    title: "Mudança de Categoria Caminhão",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Caminhao,
  },
  {
    id: 5,
    title: "Aulas Avulsas",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Aula,
  },
];

const Home = () => (
  <>
    <Hero image={Cuba}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br />
          para ir e vir
        </h1>
      </Heading>
      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
          pulvinar.
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
          pulvinar.
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
          pulvinar.
        </li>
      </ul>
      <Button color="primary" variant="outlined">
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota de carros">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar.
          </p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitacao mais rapida">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar.
          </p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localizacao">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar.
          </p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar.
          </p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Nardini Auto Escola</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar.
          </p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={Forest} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas Recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
          pulvinar.
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
          pulvinar.
        </Accordion>
        <Accordion title="Fui multado, e agora?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
          pulvinar.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
