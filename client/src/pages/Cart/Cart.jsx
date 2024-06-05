import React from "react";
import style from "./cart.module.css";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <section className={style.cart}>
      <>
        <div className={style.empty}>
          <p>В данный момент ваша корзина пуста.</p>
        </div>

        <Link to='/shop'>
          <button className={style.btn}>Вернуться в магазин</button>
        </Link>
      </>
    </section>
  );
}
