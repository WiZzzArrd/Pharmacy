import React from "react";
import style from "./notfound.module.css";

export default function Notfound() {
  return (
    <section className={style.notfound}>
      <h2>
        Страница, которую вы ищете, по каким-то причинам отсутствует.
        Пожалуйста, вернитесь на главную страницу
      </h2>
    </section>
  );
}
