const Product = require("../models/product");

exports.getProducts = async () => {
  try {
    const product = await Product.findAll();
    return product;
  } catch (error) {
    console.log(`Erro em buscar todos os produtos: ${error}`);
  }
};

exports.getProductById = async (id) => {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch (error) {
    console.log(`Erro em buscar o produto: ${error}`);
  }
};

exports.registerProduct = async (name, category, price) => {
  try {
    const product = await Product.create({
      name: name,
      category: category,
      price: price,
    });
    return { success: true };
  } catch (error) {
    console.log(`Erro em cadastrar produto: ${error}`);
  }
};

exports.updateProductInfo = async (id, name, category, price) => {
  try {
    const product = await Product.findByPk(id);
    product.set({
      name: name,
      category: category,
      price: price,
    });
    await product.save();
    return product;
  } catch (error) {
    console.log(`Erro em atualizar o produto ${id}: ${error}`);
  }
};

exports.deleteProduct = async (id) => {
  try {
    const product = await Product.findByPk(id);
    await product.destroy();
    return { success: "Produto deletado!" };
  } catch (error) {
    console.log(`Erro em deletar o produto: ${error}`);
  }
};
