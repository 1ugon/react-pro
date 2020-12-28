import React from "react";
import { render, screen } from "../../test-utils";

import ProductDetailRoute from "./index";
import { useProduct } from "../../hooks/products";
import { buildProduct } from "../../models/builders/products";

jest.mock("../../hooks/products");

test("renders with a product", () => {
  useProduct.mockReturnValue(buildProduct());
  render(<ProductDetailRoute />);

  expect(screen.getByText("Documentos necessários:")).toBeInTheDocument();
});

test("not found product", () => {
  useProduct.mockReturnValue(null);
  render(<ProductDetailRoute />);

  expect(screen.getByText("Serviço não existente")).toBeInTheDocument();
});
