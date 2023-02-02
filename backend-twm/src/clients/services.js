const Client = require("../models/client");

exports.getClients = async () => {
  try {
    const client = await Client.findAll();
    return client;
  } catch (error) {
    console.log(`Erro em buscar todos os clientes: ${error}`);
  }
};

exports.getClientById = async (id) => {
  try {
    const client = await Client.findByPk(id);
    return client;
  } catch (error) {
    console.log(`Erro em buscar o cliente: ${error}`);
  }
};

exports.registerClient = async (userName, email, password) => {
  try {
    const client = await Client.create({
      userName: userName,
      email: email,
      password: password,
    });
    return { success: true };
  } catch (error) {
    console.log(`Erro em registrar o cliente: ${error}`);
  }
};

exports.updateClientInfo = async (
  id,

  userName,
  email,
  password
) => {
  try {
    const client = await Client.findByPk(id);
    client.set({
      userName: userName,
      email: email,
      password: password,
    });
    await client.save();
    return client;
  } catch (error) {
    console.log(`Erro em atualizar o cliente: ${error}`);
  }
};

exports.deleteClient = async (id) => {
  try {
    const client = await Client.findByPk(id);
    await client.destroy();
    return { success: "Cliente deletado!" };
  } catch (error) {
    console.log(`Erro em deletar o cliente: ${error}`);
  }
};
