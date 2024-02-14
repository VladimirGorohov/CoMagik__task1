import React from "react";
import MyInput from "../UI/MyInput/MyInput.jsx";
import { useState } from "react";

import classes from "./Form.module.css";
import MyButton from "../UI/MyButton/MyButton.jsx";
import MyModal from "../UI/MyModal/MyModal.jsx";

function Form({ data, setData, posts, setPosts }) {
  const [visible, setVisible] = useState(false);

  const sendData = (e) => {
    e.preventDefault();
    if (data.name !== "" && data.age !== "" && data.phone !== "") {
      setPosts([
        ...posts,
        { id: Date.now(), name: data.name, age: data.age, phone: data.phone },
      ]);
      setData({ name: "", age: "", phone: "" });
    } else {
      setVisible(true);
    }
  };

  return (
    <>
      <h3>Заполните форму</h3>
      <MyModal visible={visible} setVisible={setVisible}>
        <span style={{textAlign:'center', marginBottom:'20px'}}>Заполните все поля!</span>
        <MyButton className={classes.form__btn} onClick={()=> setVisible(false)}>
         Ok
        </MyButton>
      </MyModal>
      <form className={classes.form__box}>
        <MyInput
          className={classes.form__input}
          type="text"
          placeholder="Введите имя"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <MyInput
          className={classes.form__input}
          type="number"
          placeholder="Введите возраст"
          value={data.age}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />
        <MyInput
          className={classes.form__input}
          type="tel"
          placeholder="+7 (xxx) xxx-xxxx"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
        <MyButton onClick={sendData} className={classes.form__btn}>
          Добавить
        </MyButton>
      </form>
    </>
  );
}

export default Form;
