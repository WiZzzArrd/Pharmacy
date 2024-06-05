import React from "react";
import style from "./quality.module.css";
import hand from "../../assets/quality/hand-1.png";
import customer from "../../assets/quality/customer-service-2.png";
import truck from "../../assets/quality/truck-1.png";
import discount from "../../assets/quality/discount-2.png";

export default function Quality() {
  return (
    <section className={style.quality}>
      <div className={style.item}>
        <img src={hand} alt='hand' />
        <div>
          <p>Безопасная Оплата</p>
          <p>ПРИНИМАЮТСЯ ВСЕ КАРТЫ</p>
        </div>
      </div>
      <div className={style.item}>
        <img src={customer} alt='customer' />
        <div>
          <p>Онлайн-Поддержка</p>
          <p>ТЕХНИЧЕСКАЯ ПОДДЕРЖКА 24/7</p>
        </div>
      </div>
      <div className={style.item}>
        <img src={truck} alt='truck' />
        <div>
          <p>Бесплатная Доставка</p>
          <p>ДЛЯ ВСЕХ ЗАКАЗОВ</p>
        </div>
      </div>
      <div className={style.item}>
        <img src={discount} alt='discount' />
        <div>
          <p>Скидки Онлайн</p>
          <p>РАСПРОДАЖИ ПО ВЫХОДНЫМ</p>
        </div>
      </div>
    </section>
  );
}
