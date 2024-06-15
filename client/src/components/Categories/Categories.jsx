import React, {useContext} from 'react';
import style from "./categories.module.css"
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";

const Categories = observer(() => {

    const {products} = useContext(Context)


    return (
        <aside className={style.categories}>

            <h2>Категории</h2>

            <ul>
                {products.categories.map((c)=>{
                    return <li className={c.id === products.selectedCategory.id ? style.activeLink : ""} onClick={()=> products.setSelectedCategory(c)} key={c.id} >{c.name}</li>
                })}
            </ul>

        </aside>
    );
});

export default Categories;