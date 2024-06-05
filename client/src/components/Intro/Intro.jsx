import React from "react";
import style from "./intro.module.css";
import banner from "../../assets/intro/Banner-Image-768x768.png";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <section className={style.intro}>
      <div className={style.info}>
        <p>медицинские товары онлайн</p>
        <h2>Приобретайте Свои Витамины & Минералы</h2>
        <Link to='/shop'>Перейти в магазин</Link>
      </div>
      <div className={style.picture}>
        <img src={banner} alt='banner' />
      </div>
    </section>
  );
}
