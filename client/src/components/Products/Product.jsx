import React, {useContext} from "react";
import style from "./product.module.css";
import product from "../../assets/items/1.jpg";
import {Context} from "../../main.jsx";
import {PRODUCT_ROUTE} from "../../utils/consts.js";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";


const Product =  observer( ({img, price, name, rating, id})=> {

    const {user} = useContext(Context)
    const {basket} = useContext(Context)
    const navigate = useNavigate()

    let isProductAdded = basket.basket.some((p) => p.id === id)


    const userId = localStorage.getItem("userId")

    const handleAddToBasket = () => {
       basket.setBasket({id, name, price, img})
    };



    return (
        <div className={style.product} >
            <img width={200} height={200} src={img || product} onClick={()=> navigate(PRODUCT_ROUTE + "/" + id)} alt='product'/>
            <p className={style.title}>{name || "Увлажнитель воздуха"}</p>
            <p className={style.price}>{price || "3700"} р.</p>
            {user.isAuth && !isProductAdded && <a onClick={ handleAddToBasket} className={style.cartlink} >
                Добавить в корзину
            </a>}
        </div>
    );
})

export default Product
