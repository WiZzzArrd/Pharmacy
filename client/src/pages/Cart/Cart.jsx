import {useContext, useEffect} from "react";
import style from "./cart.module.css";
import { Link } from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";
import {fetchBasket} from "../../http/basketApi.js";

const Cart =  observer( ()=> {

  const userId = localStorage.getItem("userId")

  const {basket} = useContext(Context)


  useEffect(() => {

    async function fetchData(){
      let data = await fetchBasket(userId);
      basket.setBasket(data)
    }

    fetchData()
  }, []);

  console.log(basket)


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
})

export default  Cart
