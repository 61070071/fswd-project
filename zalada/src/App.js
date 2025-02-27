
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
import CheckOut from "./pages/CheckOut/CheckOut";
import Details from "./pages/Details/Details"
import Payment from "./pages/Payment/Payment.js"
import Customer from "./pages/Customer/Customer.js";
import OrderCustomer from "./pages/Customer/Orders_customer/Orders_customer.js";
import OrderDetail from "./pages/Customer/Order_detail/Order_detail.js";
import Admin from "./pages/Admin/DashBoard/Admin"
import AdminOrder from "./pages/Admin/Order/Order.js"
import AdminOrderDetail from "./pages/Admin/AdminOrderDetail/AdminOrderDetail.js"
import AdminProduct from "./pages/Admin/Product/Product";
import AdminPromotions from "./pages/Admin/AdminPromotions/AdminPromotions";
import AdminProductCreate from "./pages/Admin/AdminProductCreate/AdminProductCreate";
import AdminPromotionCreate from "./pages/Admin/AdminPromotionCreate/AdminPromotionCreate";
import AdminPromotionCreateOnSale from "./pages/Admin/AdminPromotionCreateOnSale/AdminPromotionCreateOnSale";
import AdminPromotionCreateGet from "./pages/Admin/AdminPromotionCreateGet/AdminPromotionCreateGet";
import AdminAssignPromotionOnsale from "./pages/Admin/AssignPromotionOnsale/AssignPromotionOnsale";
import AdminAssignPromotionGetFree from "./pages/Admin/AssignPromotionGetFree/AssignPromotionGetFree";
import AdminUpdateOnsale from "./pages/Admin/AdminUpdateOnsale/AdminUpdateOnsale"
import AdminUpdateGetFree from "./pages/Admin/AdminUpdateGetFree/AdminUpdateGetFree"
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
import AdminProductDetails from "./pages/Admin/AdminProductDetails/AdminProductDetails";
import PromotionSale from "./pages/PromotionDetailsSale/PromotionDetailsSale";
import PromotionFree from "./pages/PromotionDetailsFree/PromotionDetailsFree";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about_us">
            <AboutUs />
          </Route>
          <Route path="/products/:productId" >
            <Details />
          </Route>
          <Route path="/products" >
            <Shop />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about_us">
            <AboutUs />
          </Route>
          <Route path="/product/details">
            <Details />
          </Route>
          <Route path="/promotions/sale/:productId">
            <PromotionSale />
          </Route>
          <Route path="/promotions/free/:productId">
            <PromotionFree />
          </Route>
          <Route path="/promotions">
            <Promotions />
          </Route>
          <Route path="/checkout">
            <CheckOut />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/admin/login">
            <AdminLogin />
          </Route>
          <Route path="/admin/products">
            <AdminProduct />
          </Route>
          <Route path="/admin/product/create" exact>
            <AdminProductCreate />
          </Route>
          <Route path="/admin/product/:productId" exact>
            <AdminProductDetails />
          </Route>  
          <Route path="/admin/promotion/update/onsale/:productId">
            <AdminUpdateOnsale />
          </Route>
          <Route path="/admin/promotion/create/onsale/:productId">
            <AdminAssignPromotionOnsale />
          </Route>

          <Route path="/admin/promotion/update/getfree/:productId">
            <AdminUpdateGetFree />
          </Route>
          <Route path="/admin/promotion/create/getfree/:productId">
            <AdminAssignPromotionGetFree />
          </Route>
          <Route path="/admin/promotion/create/getfree">
            <AdminPromotionCreateGet />
          </Route>
          <Route path="/admin/promotion/create/:productId">
            <AdminPromotionCreate />
          </Route>
          <Route path="/admin/promotion/create">
            <AdminPromotionCreateOnSale />
          </Route>
          <Route path="/admin/promotions">
            <AdminPromotions />
          </Route>

          <Route path="/admin/orders" exact>
            <AdminOrder />
          </Route>
          <Route path="/admin/orders/detail">
            <AdminOrderDetail />
          </Route>

          <Route path="/customer" exact>
            <Customer />
          </Route>
          <Route path="/customer/orders" exact>
            <OrderCustomer />
          </Route>
          <Route path="/customer/orders/detail">
            <OrderDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
