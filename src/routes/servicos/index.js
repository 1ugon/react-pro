import React from "react";
import { useParams } from "react-router-dom";

import ProductDetailPage from "../../components/pages/ProductDetail";
import Error from "../../components/pages/Error";

import { useScrollToTop } from "../../hooks/scroll";
import { useProduct } from "../../hooks/products";

const ProductDetail = () => {
  useScrollToTop();

  const { slang } = useParams();
  const product = useProduct({ slang });

  if (!product) {
    return (
      <Error
        title="Serviço não existente"
        description="Esse serviço não existe mais ou se encontra indisponível no momento"
      />
    );
  }

  return <ProductDetailPage product={product} />;
};

export default ProductDetail;
