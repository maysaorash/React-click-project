import React from "react";
import ReactDOM from "react-dom";
import {ThemeContext} from "./ThemeContext";


import App from "./App";

ReactDOM.render(
  <ThemeContext.Provider>
    <App />
  </ThemeContext.Provider>,
  document.getElementById("root")
)