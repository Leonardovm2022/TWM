require("dotenv").config();
const services = require("./services");

exports.getServices = async (req, res) => {
  const service = await services.getServices();
  res.json(service);
};

exports.getServiceById = async (req, res) => {
  const serviceId = req.params.id;
  const service = await services.getServiceById(serviceId);
  res.json(service);
};

exports.registerService = async (req, res) => {
  const { type, body, report} = req.body;
  const service = await services.registerService(type, body, report);
  res.json(service)
};

exports.updateService = async (req, res) => {
  const serviceId = req.params.id;
  const { type, body, report} = req.body;
  const service = await services.updateService(serviceId, type, body, report);
  res.json(service)
};


