import React, {useContext, useEffect} from 'react';
import Categories from "../../components/Categories/Categories.jsx";
import style from "./shop.module.css"
import Product from "../../components/Products/Product";
import {Context} from "../../main.jsx";
import {observer} from "mobx-react-lite";
import {fetchProducts} from "../../http/productsApi.js";
import SkeletonColor from "../../UI/square-skeleton/Square";
import Paginate from "../../UI/pagination/Pagination";


const Shop = observer(() => {

    const {products} = useContext(Context)
    const pageCount = Math.ceil(products.totalCount / products.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    useEffect(() => {

        async function fetchData() {
            let data = await fetchProducts(null, 1, 2)
            products.setProducts(data.rows)
            products.setTotalCount(data.count)
        }

        fetchData()

    }, [])

    useEffect(()=>{

        async function fetchData() {
            let data = await fetchProducts(products.selectedCategory.id, products.page, 3)
            products.setProducts(data.rows)
            products.setTotalCount(data.count)
        }

        fetchData()

    }, [products.page, products.selectedCategory])


    return (
        <section>

            <div className={style.shop}>
                <Categories/>
                <div className={style.products}>


                    {
                        products.productsList.length === 0 ? <SkeletonColor/> : products.productsList.map((p) => {
                            return <Product price={p.price} id={p.id} name={p.name}
                                            img={`http://localhost:5000/${p.img}`} rating={p.rating}
                                            key={p.id}></Product>
                        })
                    }

                    <div className={style.paginate}>

                        <Paginate/>
                    </div>

                </div>
            </div>


        </section>
    );
});

export default Shop;