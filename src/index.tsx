import React from "react";
import ReactDOM from "react-dom";
import App from "./componetns/App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
