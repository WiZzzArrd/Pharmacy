import React, {useContext} from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import style from "./cartitem.module.css"
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";

const CartItem = observer( ({img, price, name, id}) => {

    const {basket} = useContext(Context)

    function removeItem(){
        if(window.confirm("Удалить товар из корзины?")){
            basket.setFilter(id)
        }

    }



    return (
        <div className={style.item}>
            <ClearIcon onClick={removeItem} style={{cursor: "pointer "}}/>
            <img src={img} width={70} height={70} alt=""/>
            <span>{name}</span>
            <span>{price} р.</span>
        </div>
    );
});

export default CartItem;