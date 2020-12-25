import Carro from "../assets/carro.jpg";
import Moto1 from "../assets/moto1.jpg";
import Moto2 from "../assets/moto2.jpg";
import Caminhao from "../assets/caminhao.jpg";
import Aula from "../assets/aula.jpg";

const products = [
  {
    id: 1,
    title: "1ª Habilitação Carro e Moto",
    slang: "primeira-habilitacao-carro-e-moto",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Carro,
  },
  {
    id: 2,
    title: "1ª Habilitação Carro",
    slang: "primeira-habilitacao-carro",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Moto1,
  },
  {
    id: 3,
    title: "1ª Habilitação Moto",
    slang: "primeira-habilitacao-moto",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Moto2,
  },
  {
    id: 4,
    title: "Mudança de Categoria Caminhão",
    slang: "mudanca-de-categoria-caminhao",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Caminhao,
  },
  {
    id: 5,
    title: "Aulas Avulsas",
    slang: "aulas-avulsas",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Aula,
  },
];

export const useProducts = () => {
  return products;
};

export const useProduct = ({ slang }) => {
  return products.find((p) => p.slang === slang);
};
