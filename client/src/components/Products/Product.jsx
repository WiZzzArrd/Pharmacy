import React, {useContext} from "react";
import style from "./product.module.css";
import product from "../../assets/items/1.jpg";
import {Context} from "../../main.jsx";
import {useNavigate} from "react-router-dom";
import {PRODUCT_ROUTE} from "../../utils/consts.js";

export default function Product({img, price, name, rating, id}) {

    const {user} = useContext(Context)
    const navigate = useNavigate()




    return (
        <div className={style.product} >
            <img width={200} height={200} src={img || product} onClick={()=> navigate(PRODUCT_ROUTE + "/" + id)} alt='product'/>
            <p className={style.title}>{name || "Увлажнитель воздуха"}</p>
            <p className={style.price}>{price || "3700"} р.</p>
            {user.isAuth && <a className={style.cartlink} href='#'>
                Добавить в корзину
            </a>}
        </div>
    );
}
