const Router = require("express")
const router = new Router()
const productController = require("../controllers/productController")


router.post("/")
router.get("/")
router.get("/:id")

module.exports = router