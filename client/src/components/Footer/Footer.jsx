import React from "react";
import style from "./footer.module.css";
import facebook from "../../assets/social/facebook.svg";
import twitter from "../../assets/social/twitter.svg";
import youtube from "../../assets/social/youtube.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.description}>
        <h2>PharmPlus</h2>
        <p>
          Наша миссия - предложить вам лучший выбор продуктов как хорошо
          зарекомендовавших себя, так и перспективных.
        </p>
        <div className={style.social}>
          <img src={facebook} alt='' />
          <img src={twitter} alt='' />
          <img src={youtube} alt='' />
        </div>
      </div>

      <div className={style.information}>
        <h2>Навигация</h2>
        <ul>
          <li>
            <Link to={"/"}>Главная</Link>
          </li>
          <li>
            <Link to={"#"}>Каталог</Link>
          </li>
          <li>
            <Link to={"#"}>О нас</Link>
          </li>
          <li>
            <Link to={"/contacts"}>Контакты</Link>
          </li>
        </ul>
      </div>
      <div className={style.navigation}>
        <h2>Информация</h2>
        <ul>
          <li>
            <Link to={"#"}>Доставка</Link>
          </li>
          <li>
            <Link to={"#"}>Команда</Link>
          </li>
        </ul>
      </div>
      <div className={style.company}>
        <h2>Навигация</h2>
        <ul>
          <li>
            <Link to={"#"}>История</Link>
          </li>
          <li>
            <Link to={"#"}>Адреса</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
