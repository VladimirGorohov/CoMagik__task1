import { useState, useEffect } from "react";
import MyModal from "../UI/MyModal/MyModal.jsx";
import MyInput from "../UI/MyInput/MyInput.jsx";
import MyButton from "../UI/MyButton/MyButton.jsx";

import classes from "./Date.module.css";

function Date() {

  const [date, setDate] = useState({
    birthdayYear: 2000,
    nowYear:  2024
  });

  const { birthdayYear, nowYear } = date;

  const [visible, setVisible] = useState({
    birthdayYear: false,
    nowYear: false,
  });

  const [age, setAge] = useState(nowYear - birthdayYear);

  useEffect(() => setAge(nowYear - birthdayYear), [date]);

  return (
    <div className={classes.date}>
      <MyModal
        visible={visible.birthdayYear}
        setVisible={setVisible}
        className={classes.date__modal}
      >
        Введите год рождения:
        <MyInput
          type="number"
          value={date.birthdayYear}
          onChange={(e) => setDate({ ...date, birthdayYear: e.target.value })}
          className={classes.modal__input}
        />
        <MyButton
          onClick={() => setVisible({ ...visible, birthdayYear: false })}
          className={classes.date__btn}
        >
          OK
        </MyButton>
      </MyModal>
      <MyModal
        visible={visible.nowYear}
        setVisible={setVisible}
        className={classes.date__modal}
      >
        Введите год:
        <MyInput
          type="number"
          value={date.nowYear}
          onChange={(e) => setDate({ ...date, nowYear: e.target.value })}
          className={classes.modal__input}
        />
        <MyButton
          onClick={() => setVisible({ ...visible, nowYear: false })}
          className={classes.date__btn}
        >
          OK
        </MyButton>
      </MyModal>
      <h3 className={classes.date__header}>Калькулятор вашего возраста</h3>
      <div className={classes.date__box}>
        <div>
          <p className={classes.date__box_item}>
            Год вашего рождения:{" "}
            <span style={{ fontWeight: "bold" }}>{birthdayYear}г.</span>
            <MyButton
              onClick={() => setVisible({ ...visible, birthdayYear: true })}
              className={classes.date__btn}
            >
              Изменить
            </MyButton>
          </p>
        </div>
        <div>
          <p className={classes.date__box_item}>
            Текущий год:{" "}
            <span style={{ marginLeft: "70px", fontWeight: "bold" }}>
              {nowYear}г.
            </span>
            <MyButton
              onClick={() => setVisible({ ...visible, nowYear: true })}
              className={classes.date__btn}
            >
              Изменить
            </MyButton>
          </p>
        </div>
        <div>
          <p className={classes.date__box_item}>
            В {nowYear}г. ваш возраст:{" "}
            <span style={{ fontWeight: "bold", marginRight: "126px" }}>
              {age}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Date;
