import React from "react";
import style from "./products.module.css";
import Product from "./Product";
import {observer} from "mobx-react-lite";

const Products = observer(()=> {
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
})

export default Products;
