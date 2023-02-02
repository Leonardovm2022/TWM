require("dotenv").config();
const services = require("./services");

exports.auth = async (req, res) => {
  const { email, password } = req.body;
  const client = await services.auth(email, password);
  console.log(client);
  client
    ? res.json({ id: client })
    : res.status(401).json("Email ou senha incorretos!");
};
