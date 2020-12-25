import React from "react";

import Error from "./Error";

export default {
  title: "Components/Pages/Error",
  component: Error,
};

export const usage = () => (
  <Error
    title="Página não encontrada"
    description="Ops! Essa página foi abduzida"
  />
);
