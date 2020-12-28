import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Section from "../molecules/Section";
import Grid from "../atoms/Grid";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";

import Taken from "../../svg/taken.svg";

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
`;

const ErrorTitle = styled.h1`
  margin-top: 0;
`;

const ErrorDescription = styled.p`
  margin: 24px 0;
  font-size: 1.2rem;
`;

const Error = ({ title, description }) => (
  <Section>
    <Grid sm={2}>
      <div>
        <Heading>
          <ErrorTitle>{title}</ErrorTitle>
        </Heading>
        <ErrorDescription>{description}</ErrorDescription>
        <div>
          <Button as={Link} to="/" color="primary">
            Ir para página inicial
          </Button>
        </div>
      </div>
      <div>
        <Image
          src={Taken}
          alt="Extraterrestre sendo abduzido por nave espacial"
        />
      </div>
    </Grid>
  </Section>
);

Error.defaultProps = {
  image: undefined,
  titulo: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.node,
  titulo: PropTypes.string,
  description: PropTypes.string,
};

export default Error;
