import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import UserSearchPage from "../pages/UserSearchPage";
import RepositoriesPage from "../pages/RepositoriesPage";

const Routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {"/"}>
          <LoginPage />
        </Route>
        <Route exact path = {"/search/user/:user"}>
          <UserSearchPage />
        </Route>
        <Route exact path = {"/repositories/:userGithub/user/:user"}>
          <RepositoriesPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );

}

export default Routes;