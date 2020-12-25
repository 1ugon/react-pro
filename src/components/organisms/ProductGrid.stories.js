import React from "react";

import ProductGrid from "./ProductGrid";
import { buildProductList } from "../../models/builders/products.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid products={buildProductList(6)}></ProductGrid>
);
