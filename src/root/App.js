import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Home from "../views/Home/Home";
import Navbar from "../components/navbar/Navbar";
import Category from "../views/Category/Category";
import Wishlist from "../views/Wishlist/Wishlist";
import Product from "../views/Product/Product";
import Cart from "../views/Cart/Cart";
import OrderDetail from "../views/OrderDetail/OrderDetail";
import "./App.css";
import PaymentSuccess from "../components/ConfirmPaymentScreen/PaymentSuccess";
import PaymentFailed from "../components/ConfirmPaymentScreen/PaymentFailed";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route path="/products/:category/:productName/:productId">
            <Product />
          </Route>
          <Route path="/products/:category">
            <Category />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/order">
            <OrderDetail />
          </Route>
          <Route path="/success">
            <PaymentSuccess />
          </Route>
          <Route path="/cancel">
            <PaymentFailed />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
