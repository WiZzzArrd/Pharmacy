import React from "react";
import style from "./contacts.module.css";
import geo from "../../assets/icons/geo.png";
import oclock from "../../assets/icons/oclock.png";
import phone from "../../assets/icons/phone.png";

export default function Contacts() {
  return (
    <section className={style.contacts}>
      <h2>Связаться с нами</h2>
      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9128.19358986965!2d55.339393709140424!3d55.112425425245384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43dec30ef8992f85%3A0xa45b2d917a3f1dd2!2z0JrRg9GI0L3QsNGA0LXQvdC60L7QstC-LCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9!5e0!3m2!1sru!2sru!4v1716979798177!5m2!1sru!2sru'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>

      <p className={style.announcement}>
        Для получения дополнительной информации о наших продуктах пишите нам по
        электронной почте. Наши сотрудники всегда готовы прийти на помощь.
      </p>

      <div className={style.infoblock}>
        <div className={style.info}>
          <div className={style.item}>
            <img src={geo} alt='geo' />
            <div>
              <h3>Адрес</h3>
              <p>ул. Садовая, дом 33. </p>
              <p>Село Кушнаренково</p>
            </div>
          </div>
          <div className={style.item}>
            <img src={phone} alt='phone' />
            <div>
              <h3>Телефон</h3>
              <p>Рабочий: +1 (342) 837-8276</p>
              <p>Горячая линия: 1 (342) 808-8080</p>
            </div>
          </div>
          <div className={style.item}>
            <img src={oclock} alt='oclock' />
            <div>
              <h3>Рабочее время</h3>
              <p>Понедельник - Пятница: 9:00 - 22:00</p>
              <p>Суббота & Воскресенье: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div className={style.form}>
          <div className={style.userinfo}>
            <div className={style["userinfoitem"]}>
              <label htmlFor='name'>Имя*</label>
              <input required={true} type='text' id='name' placeholder='Джон Доу' />
            </div>
            <div className={style["userinfoitem"]}>
              <label htmlFor='email'>Email*</label>
              <input required={true} type='email' id='email' placeholder='youremail@.com' />
            </div>
          </div>

          <div
            className={style["userinfoitem"]}
            style={{ marginBottom: "30px", width: "100%" }}
          >
            <label htmlFor='subj'>Предмет</label>
            <input type='text' id='subj' placeholder='Необязательно' />
          </div>

          <div className={style.message}>
            <label htmlFor='message'>Сообщение*</label>

            <textarea
              id='message'
              cols='40'
              rows='10'
              aria-required='true'
              aria-invalid='false'
              placeholder='Здравствуйте! Я хотел бы спросить насчет...'
            ></textarea>
          </div>

          <button className={style.btn}>Отправить</button>
        </div>
      </div>
    </section>
  );
}
