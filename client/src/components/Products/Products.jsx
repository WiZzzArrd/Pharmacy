import React, {useContext, useEffect, useState} from "react";
import style from "./products.module.css";
import Product from "./Product";
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";
import {fetchProducts} from "../../http/productsApi.js";
import CircularIndeterminate from "../../UI/loader/loader";

const Products = observer(() => {

    let {products} = useContext(Context)
    let [splittedArr, setSplittedArr] = useState([])

    useEffect(() => {
        async function fetchData() {
            let data = await fetchProducts()
            products.setProducts(data.rows)
           setSplittedArr( products.productsList.slice(0, 4))
        }

        fetchData()
    }, [])


    return (
        <section className={style.productsblock}>
            <h2>Наши товары</h2>
            <div className={style.products}>

                {splittedArr.length === 0 ? <CircularIndeterminate/> : splittedArr.map((p) => {
                    return <Product price={p.price} key={p.id} name={p.name} id={p.id} rating={p.rating}
                                    img={`http://localhost:5000/${p.img}`}></Product>
                })}


            </div>
        </section>
    );
})

export default Products;
