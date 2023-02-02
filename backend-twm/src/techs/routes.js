const router = require("express").Router();
const controllers = require("./controllers");

router.get("/", controllers.getTechs);

router.get("/:id", controllers.getTechById);

router.post("/", controllers.registerTech);

router.put("/:id", controllers.updateTechInfo);

router.delete("/:id", controllers.deleteTech);

module.exports = router;
