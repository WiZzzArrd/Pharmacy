import React, {useContext} from "react";
import style from "./header.module.css";
import logo from "../../assets/header/logo.svg";
import {Link, useNavigate} from "react-router-dom";
import search from "../../assets/header/search.svg";
import cart from "../../assets/header/cart.svg";
import BasicMenu from "../../UI/menu.jsx";
import {SHOP_ROUTE, HOME_ROUTE, CONTACTS_ROUTE, CART_ROUTE} from "../../utils/consts.js";
import {Context} from "../../main.jsx";
import {observer} from "mobx-react-lite";

const Header = observer( ()=> {

    const {user} = useContext(Context)



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

          {user.isAuth && <Link to={CART_ROUTE}>
              <img src={cart} alt='cart' />
          </Link>}

      </div>
    </header>
  );
})

export default  Header;
