import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../molecules/Section";
import Grid from "../atoms/Grid";
import Heading from "../atoms/Heading";

import Taken from "../../svg/taken.svg";

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 200px;
`;

const Error = ({ title, description }) => (
  <Section>
    <Grid sm={2}>
      <div>
        <Heading>
          <h1>{title}</h1>
        </Heading>
        <p>{description}</p>
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
