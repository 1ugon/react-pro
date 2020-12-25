import Car from "../../stories/assets/mercedes.jpg";

const faker = require("faker");

export const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push({
      id: i + 1,
      image: Car,
      title: faker.commerce.productName(),
      slang: faker.lorem.slug(),
      summary: faker.commerce.productDescription(),
    });
  }

  return result;
};

export const buildProduct = () => buildProductList(1)[0];
