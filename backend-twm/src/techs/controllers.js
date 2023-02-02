require("dotenv").config();
const services = require("./services");

exports.getTechs = async (req, res) => {
  const tech = await services.getTechs();
  res.json(tech);
};

exports.getTechById = async (req, res) => {
  const techId = req.params.id;
  const tech = await services.getTechById(techId);
  res.json(tech);
};

exports.registerTech = async (req, res) => {
  const { userName, ssn, phone, license, email, password } = req.body;
  const tech = await services.registerTech(
    userName,
    ssn,
    phone,
    license,
    email,
    password
  );

  res.json(tech);
};

exports.updateTechInfo = async (req, res) => {
  const techId = req.params.id;
  const { userName, ssn, phone, license, email, password } = req.body;
  const tech = await services.updateTechInfo(
    techId,
    userName,
    ssn,
    phone,
    license,
    email,
    password
  );

  res.json(tech);
};

exports.deleteTech = async (req, res) => {
  const productId = req.params.id;
  const deletion = await services.deleteTech(productId);

  res.json(deletion);
};
