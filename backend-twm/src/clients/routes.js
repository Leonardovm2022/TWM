const router = require("express").Router();
const controllers = require("./controllers");

router.get("/", controllers.getClients);

router.get("/:id", controllers.getClientById);

router.post("/", controllers.registerClient);

router.put("/:id", controllers.updateClientInfo);

router.delete("/:id", controllers.deleteClient);

module.exports = router;
