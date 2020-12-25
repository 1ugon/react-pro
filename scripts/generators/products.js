const faker = require("faker");

const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push({
      id: i + 1,
      image: "",
      title: faker.commerce.productName(),
      slang: faker.lorem.slug(),
      summary: faker.commerce.productDescription(),
    });
  }

  return result;
};

console.log(JSON.stringify(buildProductList(100), null, "  "));
