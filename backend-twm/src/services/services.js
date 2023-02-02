const Service = require("../models/service");

exports.getServices = async () => {
  try {
    const service = await Service.findAll();
    return service;
  } catch (error) {
    console.log(`Erro em buscar todos os serviços: ${error}`);
  }
};

exports.getServiceById = async (id) => {
  try {
    const service = await Service.findByPk(id);
    return service;
  } catch (error) {
    console.log(`Erro em buscar o cliente: ${error}`);
  }
};

exports.registerService = async (type, body, report) => {
  try {
    const service = await Service.create({
      type: type,
      body: body,
      report: report,
    });
    return { success: true };
  } catch (error) {
    console.log(`Erro ao solicitar serviço: ${error}`);
  }
};

exports.updateService = async (id, type, body, report) => {
  try {
    const service = await Service.findByPk(id);
    service.set({
      // type: type,
      // body: body,
      report: report,
    });
    await service.save();
    return { success: true };
  } catch (error) {
    console.log(`Erro em atualizar o laudo: ${error}`);
  }
};