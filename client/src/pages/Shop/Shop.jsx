import React, {useContext} from 'react';
import Categories from "../../components/Categories/Categories.jsx";
import style from "./shop.module.css"
import Product from "../../components/Products/Product";
import {Context} from "../../main.jsx";

const Shop = () => {

    const {products} = useContext(Context)

    return (
        <section  className={style.shop}>
            <Categories />
            <div className={style.products}>
                {
                    products.productsList.map((p)=>{
                        return <Product price = {p.price} id = {p.id} name = {p.name} img = {p.img} rating ={p.rating} key = {p.id}></Product>
                    })
                }
            </div>
        </section>
    );
};

export default Shop;