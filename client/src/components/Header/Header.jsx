import React from "react";
import style from "./header.module.css";
import logo from "../../assets/header/logo.svg";
import { Link } from "react-router-dom";
import search from "../../assets/header/search.svg";
import user from "../../assets/header/person.svg";
import cart from "../../assets/header/cart.svg";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to={"/"}>
          <img src={logo} alt='logo' />
        </Link>
      </div>

      <nav className={style.nav}>
        <ul>
          <li>
            <Link to={"/"}>Главная</Link>
          </li>
          <li>
            <Link>Магазин</Link>
          </li>
          <li>
            <Link>Список желаний</Link>
          </li>
          <li>
            <Link to='/contacts'>Контакты</Link>
          </li>
        </ul>
      </nav>

      <div className={style.tools}>
        <Link>
          <img src={search} alt='search' />
        </Link>
        <Link>
          <img src={user} alt='user' />
        </Link>
        <Link to={"/cart"}>
          <img src={cart} alt='cart' />
        </Link>
      </div>
    </header>
  );
}
