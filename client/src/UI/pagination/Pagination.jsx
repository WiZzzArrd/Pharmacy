import * as React from 'react';
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../../main.jsx";
import style from "./pagination.module.css"

const Paginate = observer( ()=> {

    const {products} = useContext(Context)
    const pageCount = Math.ceil(products.totalCount / products.limit)
    const pages = []

    for(let i = 0; i < pageCount; i++){
        pages.push(i + 1)
    }

    function selectPage(n){
        products.setPage(n)
    }

    return (
        <div className={style.pagination}>

            <div className={style.nums}>
                {pages.map((n)=>{
                    return < span key={n}  onClick={() => selectPage(n)} className={products.page === n ? style.active : ""} >{n}</span>
                })}
            </div>

        </div>
    );
})

export default  Paginate