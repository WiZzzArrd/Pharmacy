const { Basket, BasketProduct, Product } = require('../models/models');
 class basketController{
    async addToBasket(req, res){
        const { userId, productId } = req.body;

        let basket = await Basket.findOne({ where: { userId } });
        if (!basket) {
            basket = await Basket.create({ userId });
        }

        const basketProduct = await BasketProduct.create({
            basketId: basket.id,
            productId
        });

        res.json(basketProduct);
    }

    async removeFromBasket(req, res){
        const { basketProductId } = req.body;

        await BasketProduct.destroy({
            where: { id: basketProductId }
        });

        res.json({ message: 'Товар был успешно удален' });
    }

    async getBasket(req, res){
        const { userId } = req.params;

        const basket = await Basket.findOne({
            where: { userId },
            include: [
                {
                    model: BasketProduct,
                    include: [
                        {
                            model: Product
                        }
                    ]
                }
            ]
        });

        if (!basket) {
            return res.json({ products: [] });
        }

        res.json(basket);
    }
}

module.exports = new basketController()
