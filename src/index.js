import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ruRU from "antd/lib/locale-provider/ru_RU";
import { HeaderMenu } from "./HeaderMenu";
import * as serviceWorker from "./serviceWorker";
import { LibraryList } from "./pages/LibraryList/LibraryList";
import { LibraryInfo } from "./pages/LibraryInfo/LibraryInfo";
import "antd/dist/antd.css";

ReactDOM.render(
  <BrowserRouter>
    <HeaderMenu />

    <Switch locale={ruRU}>
      <Route exact path="/">
        <LibraryList />
      </Route>
      <Route exact path="/main-list">
        <LibraryList />
      </Route>
      <Route exact path="/lib-info">
        <LibraryInfo />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
