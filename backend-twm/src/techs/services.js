const Tech = require("../models/tech");

exports.getTechs = async () => {
  try {
    const tech = await Tech.findAll();
    return tech;
  } catch (error) {
    console.log(`Erro em buscar todos os técnicos: ${error}`);
  }
};

exports.getTechById = async (id) => {
  try {
    const tech = await Tech.findByPk(id);
    return tech;
  } catch (error) {
    console.log(`Erro em buscar o técnico: ${error}`);
  }
};

exports.registerTech = async (
  userName,
  ssn,
  phone,
  license,
  email,
  password
) => {
  try {
    const tech = await Tech.create({
      userName: userName,
      ssn: ssn,
      phone: phone,
      license: license,
      email: email,
      password: password,
    });
    return { success: true };
  } catch (error) {
    console.log(`Erro em cadastrar técnico: ${error}`);
  }
};

exports.updateTechInfo = async (
  id,
  userName,
  ssn,
  phone,
  license,
  email,
  password
) => {
  try {
    const tech = await Tech.findByPk(id);
    tech.set({
      userName: userName,
      ssn: ssn,
      phone: phone,
      license: license,
      email: email,
      password: password,
    });
    await tech.save();
    return tech;
  } catch (error) {
    console.log(`Erro em atualizar o técnico ${id}: ${error}`);
  }
};

exports.deleteTech = async (id) => {
  try {
    const tech = await Tech.findByPk(id);
    await tech.destroy();
    return { success: "Técnico deletado!" };
  } catch (error) {
    console.log(`Erro em deletar o técnico: ${error}`);
  }
};
