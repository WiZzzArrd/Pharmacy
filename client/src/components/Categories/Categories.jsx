import React, {useContext, useEffect} from 'react';
import style from "./categories.module.css"
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";
import {fetchCategories} from "../../http/productsApi.js";
import Animations from "../../UI/skeleton/Skeleton";

const Categories = observer(() => {

    const {products} = useContext(Context)

    useEffect(()=>{

        async  function fetchData(){
            let categories = await  fetchCategories()

            products.setCategories(categories)

            console.log(products)
        }

        fetchData()

    }, [])

    return (
        <aside className={style.categories}>

            <h2>Категории</h2>

            <ul>

                {products.categories.length === 0 ? <Animations/> : products.categories.map((c)=>{
                    return <li className={c.id === products.selectedCategory.id ? style.activeLink : ""} onClick={()=> products.setSelectedCategory(c)} key={c.id} >{c.name}</li>
                })}

            </ul>

        </aside>
    );
});

export default Categories;