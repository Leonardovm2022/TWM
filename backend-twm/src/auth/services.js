const Client = require("../models/client");

exports.auth = async (email, password) => {
  try {
    //2) verificar se usuario nao existe
    const client = await Client.findOne({ where: { email: email } });
    if (client === null) {
      return false;
    }

    //3) verificar se a senha digitada eh igual a registrada no db

    if (client.password !== password) {
      return false;
    }

    //4) Confirmar sessão do usuário
    return true;
  } catch (err) {
    console.error(err.message);
  }
};
