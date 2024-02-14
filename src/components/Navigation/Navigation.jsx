import menu from "../../system/menu.json";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes.navigation}>
      <div className={classes.navigatoin__wrap}>
        <ul className={classes.navigation__wrap_items}>
          {menu.map((el) => (
            <NavLink to={el.link}>
              {/* <li className={classes.navigation__wrap_item} key={el.id}> */}
               <span className={classes.navigation__wrap_item}>{el.title}</span> 
              {/* </li> */}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
