import React from "react";
import "../../App.css"
import "./Shop.css";
import Img_Shop from "../../images/Component_3.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
function Shop() {
  return (
    <div className="page_shop mx-auto">
      <p className="color-main">HOME &gt; Shop</p>
      <div className="w-100"> <img className="w-100" src={Img_Shop}/> </div>
      <div className="w-100">

      </div>
    </div>
  )
}

export default Shop;