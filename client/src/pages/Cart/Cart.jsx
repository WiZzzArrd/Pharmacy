import {useContext, useEffect} from "react";
import style from "./cart.module.css";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";
import CartItem from "./CartItem.jsx";


const Cart = observer(() => {

    const userId = localStorage.getItem("userId")

    const {basket} = useContext(Context)


    let total = basket.basket.reduce((acc, p) => {
        return acc += Number(p.price)
    }, 0)

    return (
        <section className={style.cart}>
            <>
                {basket.basket.length === 0 ? <>
                        <div className={style.empty}>
                            <p>В данный момент ваша корзина пуста.</p>
                        </div>

                        <Link to='/shop'>
                            <button className={style.btn}>Вернуться в магазин</button>
                        </Link></> :
                    <div className={style.cartBlock}>
                        <div className={style.left}>
                            <div className={style.top}>
                                <span>Товар</span><span>Название</span><span>Цена</span>
                            </div>
                            {
                                basket.basket.map((p) => {
                                    return <CartItem name={p.name} id={p.id} key={p.id} price={p.price} img={p.img}/>
                                })
                            }
                        </div>
                        <div className={style.right}>

                            <h3>Cart totals</h3>

                            <div className={style.total}>
                                <span>Total</span>
                                <span className={style.price}>{total} р.</span>
                            </div>

                            <button disabled={true}>Оплатить</button>
                        </div>

                    </div>
                }

            </>
        </section>
    );
})

export default Cart
