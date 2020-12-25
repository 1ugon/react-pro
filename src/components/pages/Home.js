import React from "react";
import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import { Link } from "react-router-dom";

import ProductType from "../../models/types/ProductType";

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
import Forest from "../../assets/forest.mp4";

const Home = ({ products }) => (
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
            <h2>Auto Escola</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar.
          </p>
          <div>
            <Button as={Link} to="/sobre" color="primary">
              Saiba mais
            </Button>
          </div>
        </div>
        <div>
          <video src={Forest} width="100%" autoPlay playsInline loop muted />
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

Home.defaultProps = {
  products: [],
};

Home.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

export default Home;
