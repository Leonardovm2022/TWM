const router = require("express").Router();
const controllers = require("./controllers");

router.post("/", controllers.registerService);
router.put("/:id", controllers.updateService);
router.get("/", controllers.getServices);
router.get("/:id", controllers.getServiceById);

module.exports = router;
