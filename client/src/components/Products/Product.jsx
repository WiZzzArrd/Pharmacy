import React, {useContext} from "react";
import style from "./product.module.css";
import product from "../../assets/items/1.jpg";
import {Context} from "../../main.jsx";
import {useNavigate} from "react-router-dom";
import {PRODUCT_ROUTE} from "../../utils/consts.js";


import {addToBasket} from "../../http/basketApi.js";

export default function Product({img, price, name, rating, id}) {

    const {user} = useContext(Context)



    const navigate = useNavigate()

    const userId = localStorage.getItem("userId")

    const handleAddToBasket = (productId) => {
        addToBasket(userId, productId).then((data)=>{
            console.log(data)
        }).catch((e)=>{
            alert("Не удалось добавить товар в корзину")

        })
    };



    return (
        <div className={style.product} >
            <img width={200} height={200} src={img || product} onClick={()=> navigate(PRODUCT_ROUTE + "/" + id)} alt='product'/>
            <p className={style.title}>{name || "Увлажнитель воздуха"}</p>
            <p className={style.price}>{price || "3700"} р.</p>
            {user.isAuth && <a onClick={()=> handleAddToBasket(id)} className={style.cartlink} >
                Добавить в корзину
            </a>}
        </div>
    );
}
