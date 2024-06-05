import React from "react";
import style from "./product.module.css";
import product from "../../assets/items/1.jpg";

export default function Product() {
  return (
    <div className={style.product}>
      <img src={product} alt='product' />
      <p className={style.title}>Увлажнитель воздуха</p>
      <p className={style.price}>3700 р</p>
      <a className={style.cartlink} href='#'>
        Добавить в корзину
      </a>
      <a className={style.wish} href='#'>
        Добавить в список желаемых
      </a>
    </div>
  );
}
