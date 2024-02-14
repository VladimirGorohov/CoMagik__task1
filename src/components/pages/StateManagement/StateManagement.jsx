import { useState } from "react";
import Date from "../../Date/Date";

import classes from "./StateManagement.module.css";

function StateManagement() {
  return (
    <div className={classes.home}>
      <Date />
    </div>
  );
}

export default StateManagement;
