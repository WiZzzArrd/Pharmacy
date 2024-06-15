import React from 'react';
import QuantityInput from "../../UI/quantity-input/quantityInput.jsx";
import style from "./product.module.css"
import garant from "../../assets/productPage/Safecheckout.png"

const ProductPage = () => {
    return (
        <section className={style.productPage}>
            <div className={style.left}>
                <img src="https://cdn.farmlend.ru/assets/thumbnails/e4/e4e24d04e3dcbfb45c1c5bd41bea2bbf.jpg" alt=""/>
            </div>
            <div className={style.right}>
                <h2>Embroidered Haring Cap</h2>
                <p className={style.price}>1200 р.</p>
                <p className={style.description}>Qui, explicabo eius nisi fugit repudiandae, quos voluptates, beatae ullam consectetur ducimus itaque! Tempore provident eligendi sed ipsum ea. Reiciendis nulla neque sapiente, totam veritatis non? Odio, quaerat.</p>

                <div className={style.btns}>
                    <QuantityInput/>
                    <button >Добавить в корзину</button>
                </div>

                <div>
                    <img src={garant} width={477} height={93} alt=""/>
                </div>
            </div>
        </section>
    )
};

export default ProductPage;