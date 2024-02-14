import Navigation from "./components/Navigation/Navigation";
import StateManagement from "./components/pages/StateManagement/StateManagement";
import FCButton from "./components/pages/FCButton/FCButton";
import WorkForms from "./components/pages/WorkForms/WorkForms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import classes from "./App.module.css";

function App() {
  return (
    <>
      <Navigation />
      <div className={classes.wrap}>
        <Routes>
          <Route path="/" element={<StateManagement />}></Route>
          <Route path="/forms" element={<WorkForms />}></Route>
          <Route path="/button" element={<FCButton />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
