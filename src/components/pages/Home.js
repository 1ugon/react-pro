import React from "react";
// import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Hero from "../../components/molecules/Hero";
import Heading from "../../components/atoms/Heading";
import Button from "../../components/atoms/Button";
import Grid from "../../components/atoms/Grid";
import Feature from "../../components/atoms/Feature";
import Section from "../../components/molecules/Section";
import Footer from "../../components/organisms/Footer";

import Cuba from "../../assets/cuba.jpg";
import Forest from "../../assets/forest.mp4";

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
          pulvinar. Aenean dignissim, eros id semper euismod, libero turpis
          viverra nisi, rutrum faucibus mauris neque eu urna. Suspendisse sem
          tellus, consectetur ullamcorper iaculis fermentum, tristique ut odio.
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
          pulvinar. Aenean dignissim, eros id semper euismod, libero turpis
          viverra nisi, rutrum faucibus mauris neque eu urna. Suspendisse sem
          tellus, consectetur ullamcorper iaculis fermentum, tristique ut odio.
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
          pulvinar. Aenean dignissim, eros id semper euismod, libero turpis
          viverra nisi, rutrum faucibus mauris neque eu urna. Suspendisse sem
          tellus, consectetur ullamcorper iaculis fermentum, tristique ut odio.
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
            pulvinar. Aenean dignissim, eros id semper euismod, libero turpis
            viverra nisi, rutrum faucibus mauris neque eu urna. Suspendisse sem
            tellus, consectetur ullamcorper iaculis fermentum, tristique ut
            odio.
          </p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitacao mais rapida">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar. Aenean dignissim, eros id semper euismod, libero turpis
            viverra nisi, rutrum faucibus mauris neque eu urna. Suspendisse sem
            tellus, consectetur ullamcorper iaculis fermentum, tristique ut
            odio.
          </p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localizacao">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar. Aenean dignissim, eros id semper euismod, libero turpis
            viverra nisi, rutrum faucibus mauris neque eu urna. Suspendisse sem
            tellus, consectetur ullamcorper iaculis fermentum, tristique ut
            odio.
          </p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
            pulvinar. Aenean dignissim, eros id semper euismod, libero turpis
            viverra nisi, rutrum faucibus mauris neque eu urna. Suspendisse sem
            tellus, consectetur ullamcorper iaculis fermentum, tristique ut
            odio.
          </p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheca nossos servicos</h2>
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
            pulvinar. Aenean dignissim, eros id semper euismod, libero turpis
            viverra nisi, rutrum faucibus mauris neque eu urna. Suspendisse sem
            tellus, consectetur ullamcorper iaculis fermentum, tristique ut
            odio.
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
        <h2>Duvidas Recorrentes</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
