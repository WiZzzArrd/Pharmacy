import React, {useEffect, useState} from 'react';
import QuantityInput from "../../UI/quantity-input/quantityInput.jsx";
import style from "./product.module.css"
import garant from "../../assets/productPage/Safecheckout.png"
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../../http/productsApi.js";
import {observer} from "mobx-react-lite";
import CircularIndeterminate from "../../UI/loader/loader";

const ProductPage = observer(() => {
    const [product, setProduct] = useState([])
    let {id} = useParams()


    useEffect(() => {

        fetchOneProduct(id).then((data) => setProduct(data))

    }, [])


    return (
        <section className={style.productPage}>

            {product.length === 0 ? <CircularIndeterminate/> : <>
                <div className={style.left}>
                    <img src={`${import.meta.env.VITE_API_URL + product.img}`} alt=""/>
                </div>
                <div className={style.right}>
                    <h2>{product.name}</h2>
                    <p className={product.price}>1200 р.</p>
                    <p className={style.description}>Qui, explicabo eius nisi fugit repudiandae, quos voluptates, beatae
                        ullam consectetur ducimus itaque! Tempore provident eligendi sed ipsum ea. Reiciendis nulla
                        neque sapiente, totam veritatis non? Odio, quaerat.</p>

                    <div className={style.btns}>
                        <QuantityInput/>
                        <button>Добавить в корзину</button>
                    </div>

                    <div>
                        <img src={garant} width={477} height={93} alt=""/>
                    </div>
                </div>
            </>}

        </section>
    )
});

export default ProductPage;