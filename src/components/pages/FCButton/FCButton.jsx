import MyButton from "../../UI/MyButton/MyButton";
import { useState } from "react";


import classes from "./FCButton.module.css";

function FCButton() {

  const [color, setColor] = useState({
    btn_1: false,
    btn_2: false,
    btn_3: false
  });

  console.log(color.btn_1)

  return <div className={classes.button}>
    <h3>Переиспользуемый компонент MyButton в который можно передавать разные стили и текст</h3>
    <div className={classes.button__box}>
        <MyButton onClick={()=> setColor({...color, btn_1: !color.btn_1})} className={color.btn_1 ? classes.button__btn1 : classes.button__btn_active1 }>Я меняю цвет</MyButton>
        <MyButton onClick={()=> setColor({...color, btn_2: !color.btn_2})}className={color.btn_2 ? classes.button__btn2 : classes.button__btn_active2 }>Я тоже</MyButton>
        <MyButton onClick={()=> setColor({...color, btn_3: !color.btn_3})}className={color.btn_3 ? classes.button__btn3 : classes.button__btn_active3 }>И я</MyButton>
        </div>
  </div>;
}

export default FCButton;
