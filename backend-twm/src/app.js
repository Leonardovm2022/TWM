const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/clients", require("./clients/routes"));
app.use("/api/v1/products", require("./products/routes"));
app.use("/api/v1/techs", require("./techs/routes"));
app.use("/api/v1/auth", require("./auth/routes"));
app.use("/api/v1/services", require("./services/routes"))

module.exports = app;
