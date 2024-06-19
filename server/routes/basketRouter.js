const Router = require("express")
const router = new Router()
const basketController = require("../controllers/basketController")



router.post("/",  basketController.addToBasket)
router.delete("/", basketController.removeFromBasket)
router.get("/:userId", basketController.getBasket)

module.exports = router