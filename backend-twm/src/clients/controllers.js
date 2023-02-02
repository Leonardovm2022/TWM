// require("dotenv").config();
const services = require("./services");

exports.getClients = async (req, res) => {
  const client = await services.getClients();
  res.json(client);
};

exports.getClientById = async (req, res) => {
  const clientId = req.params.id;
  const client = await services.getClientById(clientId);
  res.json(client);
};

exports.registerClient = async (req, res) => {
  const { userName, email, password } = req.body;
  const client = await services.registerClient(

    userName,
    email,
    password
  );

  res.json(client);
};

exports.updateClientInfo = async (req, res) => {
  const clientId = req.params.id;
  const { imageProfile, userName, email, password } = req.body;
  const client = await services.updateClientInfo(
    clientId,
    userName,
    email,
    password
  );

  res.json(client);
};

exports.deleteClient = async (req, res) => {
  const clientId = req.params.id;
  const deletion = await services.deleteClient(clientId);

  res.json(deletion);
};
