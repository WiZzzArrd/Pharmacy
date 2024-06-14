import React, {useContext} from "react";
import style from "./header.module.css";
import logo from "../../assets/header/logo.svg";
import { Link } from "react-router-dom";
import search from "../../assets/header/search.svg";
import cart from "../../assets/header/cart.svg";
import BasicMenu from "../../UI/menu.jsx";
import {SHOP_ROUTE, HOME_ROUTE, CONTACTS_ROUTE, CART_ROUTE} from "../../utils/consts.js";
import {Context} from "../../main.jsx";

export default function Header() {

    const user = useContext(Context)
    console.log(user)

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to={HOME_ROUTE}>
          <img src={logo} alt='logo' />
        </Link>
      </div>

      <nav className={style.nav}>
        <ul>
          <li>
            <Link to={HOME_ROUTE}>Главная</Link>
          </li>
          <li>
            <Link to={SHOP_ROUTE}>Магазин</Link>
          </li>

          <li>
            <Link to={CONTACTS_ROUTE}>Контакты</Link>
          </li>
        </ul>
      </nav>

      <div className={style.tools}>
        <Link>
          <img src={search} alt='search' />
        </Link>

        <BasicMenu/>

          {user.isLogin && <Link to={CART_ROUTE}>
              <img src={cart} alt='cart' />
          </Link>}

      </div>
    </header>
  );
}
