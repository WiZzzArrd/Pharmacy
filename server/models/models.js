const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const User = sequelize.define("user",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Basket = sequelize.define("basket", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketProduct = sequelize.define("basket_product", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Product = sequelize.define("product", {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type:DataTypes.STRING, unique: true, allowNull: false},
    price: {type:DataTypes.INTEGER, allowNull: false},
    rating: {type:DataTypes.INTEGER, defaultValue: 0},
    img: {type:DataTypes.STRING, allowNull: false},
})

const Category = sequelize.define("category", {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type:DataTypes.STRING, unique: true, allowNull: false}
})

const Tag = sequelize.define("tag", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Rating = sequelize.define("rating", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Category.hasMany(Product)
Product.belongsTo(Category)

Tag.hasMany(Product)
Product.belongsTo(Tag)

Product.hasMany(Rating)
Rating.belongsTo(Product)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

module.exports = {
    User,
    Basket,
    BasketProduct,
    Product,
    Category,
    Tag,
    Rating
}