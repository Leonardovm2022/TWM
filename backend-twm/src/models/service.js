const Sequelize = require("sequelize");
const sequelize = require("../util/database.config");

const Service = sequelize.define("service", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  report: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Service;
