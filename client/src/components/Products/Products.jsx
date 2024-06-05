import React from "react";
import style from "./products.module.css";
import Product from "./Product";

export default function Products() {
  return (
    <section className={style.productsblock}>
      <h2>Наши товары</h2>
      <div className={style.products}>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </section>
  );
}
