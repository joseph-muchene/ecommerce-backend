const router = require("express").Router();
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const {
  createProduct,
  deleteProduct,
  updateProduct,
  readProduct,
  getAllProducts,
  relatedProducts,
  listCategories,
} = require("../controller/Product");
router.route("/").post(verifyTokenAndAdmin, createProduct).get(getAllProducts);
// tested
// @condition = working
router
  .route("/:id")
  .put(verifyTokenAndAdmin, updateProduct)
  .delete(verifyTokenAndAdmin, deleteProduct)
  .get(readProduct);
router.route("/related/:id").get(relatedProducts);
router.route("/categories/all").get(listCategories);

module.exports = router;
