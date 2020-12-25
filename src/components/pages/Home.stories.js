import React from "react";

import Home from "./Home";

import { buildProductList } from "../../models/builders/products.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Pages/Home",
  component: Home,
};

const products = buildProductList(8);

export const usage = () => <Home products={products} />;
