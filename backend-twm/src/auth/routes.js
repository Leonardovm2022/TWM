const router = require("express").Router();
const controllers = require("./controllers");

router.post("/", controllers.auth);

module.exports = router;
