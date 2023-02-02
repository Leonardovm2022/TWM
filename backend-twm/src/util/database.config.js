require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const connectDB = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Banco conectado com sucesso!");
  } catch (error) {
    console.log(error);
  }
};

connectDB();

module.exports = sequelize;
