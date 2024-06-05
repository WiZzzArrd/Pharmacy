const Router = require("express")
const router = new Router()
const productRouter = require("./productRouter")
const tagRouter = require("./tagRouter")
const userRouter = require("./userRouter")
const categoryRouter = require("./categoryRouter")

router.use("/user", userRouter)
router.use("/category", categoryRouter)
router.use("/tag", tagRouter)
router.use("/product", productRouter)

module.exports = router
