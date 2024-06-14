import React, {useContext} from "react";
import style from "./product.module.css";
import product from "../../assets/items/1.jpg";
import {Context} from "../../main.jsx";

export default function Product() {

    const user = useContext(Context)

  return (
    <div className={style.product}>
      <img src={product} alt='product' />
      <p className={style.title}>Увлажнитель воздуха</p>
      <p className={style.price}>3700 р</p>
        {user.isLogin &&      <a className={style.cartlink} href='#'>
            Добавить в корзину
        </a>}


    </div>
  );
}
