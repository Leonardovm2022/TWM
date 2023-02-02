const router = require("express").Router();
const controllers = require("./controllers");

router.get("/", controllers.getProducts);

router.get("/:id", controllers.getProductById);

router.post("/", controllers.registerProduct);

router.put("/:id", controllers.updateProductInfo);

router.delete("/:id", controllers.deleteProduct);

module.exports = router;
