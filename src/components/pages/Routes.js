import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PizzaPlaces from "./restaurants/PizzaPlaces";
import BurgerPlaces from "./restaurants/BurgerPlaces";
import SignIn from "./auth/SignIn";
import SignOut from "./auth/SignOut";
import SignUp from "./auth/SignUp";

export function routes(currentUser) {
  if (currentUser) {
    return (
      <Switch>
        <Route path="/pizza">
          <PizzaPlaces></PizzaPlaces>
        </Route>
        <Route path="/burger">
          <BurgerPlaces></BurgerPlaces>
        </Route>
        <Redirect from={"*"} to={"/burger"}></Redirect>
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/signin">
        <SignIn></SignIn>
      </Route>
      <Route path="/signup">
        <SignUp></SignUp>
      </Route>
      <Route path="/signout">
        <SignOut></SignOut>
      </Route>
      <Redirect from={"*"} to={"/signin"}></Redirect>
    </Switch>
  );
}

export default routes;
