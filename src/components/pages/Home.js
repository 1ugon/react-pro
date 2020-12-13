import React from "react";
// import PropTypes from "prop-types";

import Hero from "../../components/molecules/Hero";
import Heading from "../../components/atoms/Heading";
import Button from "../../components/atoms/Button";
import Grid from "../../components/atoms/Grid";
import Feature from "../../components/atoms/Feature";
import Section from "../../components/molecules/Section";

import Cuba from "../../assets/cuba.jpg";
import { FaCar } from "react-icons/fa";

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
        <li>Lorem ipsum dolor sit amet consectetur ad</li>
        <li>Lorem ipsum dolor sit amet consectetur ad</li>
        <li>Lorem ipsum dolor sit amet consectetur ad</li>
      </ul>
      <Button color="primary" variant="outlined">
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota de carros">
          <p>Lorem ipsum dolor sit amet consectetur ad</p>
        </Feature>
        <Feature icon={<FaCar />} title="Habilitacao mais rapida">
          <p>Lorem ipsum dolor sit amet consectetur ad</p>
        </Feature>
        <Feature icon={<FaCar />} title="Excelente localizacao">
          <p>Lorem ipsum dolor sit amet consectetur ad</p>
        </Feature>
        <Feature icon={<FaCar />} title="Acessibilidade">
          <p>Lorem ipsum dolor sit amet consectetur ad</p>
        </Feature>
      </Grid>
    </Section>
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
