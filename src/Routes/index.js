import React from "react";
import { Route, BrowserRouter, Routes as RoutesDOM } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Cart";
import Header from "../Components/Header/Header";
  
  function Routes() {
    return (

    <BrowserRouter>
      <RoutesDOM>
        <Route element = { <Cart/> }  path="/cart" exact />
        <Route element = { <Home/> }  path="/" exact/>

      </RoutesDOM>

    </BrowserRouter>
    );
  }
  
  export default Routes;