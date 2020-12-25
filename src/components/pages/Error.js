import React from "react";
import PropTypes from "prop-types";

import Grid from "../atoms/Grid";
import Heading from "../atoms/Heading";

const Error = ({ image, titulo, description }) => (
  <>
    <Grid md={2}>
      <div>
        <Heading>
          <h1>Titulo</h1>
        </Heading>
      </div>
      <div></div>
    </Grid>
  </>
);

Error.defaultProps = {
  image: undefined,
  titulo: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.string,
  titulo: PropTypes.string,
  description: PropTypes.string,
};

export default Error;
