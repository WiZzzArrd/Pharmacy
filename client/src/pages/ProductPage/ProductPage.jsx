import React, {useContext, useEffect, useState} from 'react';
import QuantityInput from "../../UI/quantity-input/quantityInput.jsx";
import style from "./product.module.css"
import garant from "../../assets/productPage/Safecheckout.png"
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../../http/productsApi.js";
import {observer} from "mobx-react-lite";
import CircularIndeterminate from "../../UI/loader/loader";
import {Context} from "../../main.jsx";

const ProductPage = observer(() => {
    const [product, setProduct] = useState([])
    let {id} = useParams()

    const {basket} = useContext(Context)
    const {user} = useContext(Context)
    let isProductAdded = basket.basket.some((p) => p.id === product.id)

    useEffect(() => {

        fetchOneProduct(id).then((data) => setProduct(data))

    }, [])

    function addItem() {

        basket.setBasket({
            id: product.id,
            name: product.name,
            price: product.price,
            img: `http://localhost:5000/${product.img}`
        })
    }


    return (
        <section className={style.productPage}>

            {product.length === 0 ? <CircularIndeterminate/> : <>
                <div className={style.left}>
                    <img src={`${import.meta.env.VITE_API_URL + product.img}`} alt=""/>
                </div>
                <div className={style.right}>
                    <h2>{product.name}</h2>
                    <p className={style.price}>{product.price} р.</p>
                    <p className={style.description}>Продукт был протестирован и оценен уполномоченной сторонней
                        организацией на соответствие определенным стандартам и требованиям.</p>

                    {user.isAuth && <div className={style.btns}>
                        {!isProductAdded ? <button onClick={addItem}>Добавить в корзину</button> :
                            <button>Товар добавлен в корзину</button>}
                    </div>}


                    <div>
                        <img src={garant} width={477} height={93} alt=""/>
                    </div>
                </div>
            </>}

        </section>
    )
});

export default ProductPage;