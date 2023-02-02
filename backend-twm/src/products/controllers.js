require("dotenv").config();
const services = require("./services");

exports.getProducts = async (req, res) => {
  const client = await services.getProducts();
  res.json(client);
};

exports.getProductById = async (req, res) => {
  const clientId = req.params.id;
  const client = await services.getProductById(clientId);
  res.json(client);
};

exports.registerProduct = async (req, res) => {
  const { name, category, price } = req.body;
  const product = await services.registerProduct(name, category, price);

  res.json(product);
};

exports.updateProductInfo = async (req, res) => {
  const productId = req.params.id;
  const { name, category, price } = req.body;
  const product = await services.updateProductInfo(
    productId,
    name,
    category,
    price
  );

  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  const deletion = await services.deleteProduct(productId);

  res.json(deletion);
};
