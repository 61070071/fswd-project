
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Shop from "./pages/Shop/Shop.js";
import AboutUs from "./pages/About_Us/About_Us.js";
import Cart from "./pages/Cart/Cart.js";
import NavBar from "./components/NavBar/NavBar.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import Promotions from "./pages/Promotions/Promotions.js";
import AccountInfo from "./pages/Account_Info/Account_Info.js";
import Details from "./pages/Details/Details"
import Payment from "./pages/Payment/Payment.js"
import Admin from "./pages/Admin/DashBoard/Admin"
import AdminOrder from "./pages/Admin/Order/Order.js"
import AdminProduct from "./pages/Admin/Product/Produst";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div>
        <NavBar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about_us">
            <AboutUs />
          </Route>
          <Route path="/products">
            <Shop />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/account_info">
            <AccountInfo />
          </Route>
          <Route path="/promotions">
            <Promotions />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/admin/orders">
            <AdminOrder />
          </Route>
          <Route path="/product">
            <AdminProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
