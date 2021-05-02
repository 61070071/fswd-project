import React, { useState } from "react";
import "./AddListProduct.css";
import del from "../../images/icon-delect.svg"
import { Link } from "react-router-dom";
function AddListProduct({ data }) {

    const [activeBtn, setActiveBtn] = useState(true);

    function toggleBtn() {
        setActiveBtn(!activeBtn);
    }
    return (

        <div className="w-100 d-flex mt-1-v box-add-list-product">
            <Link to="/admin/product/:productId" className="w-50">
                <div className="w-100 d-flex align-items-center">
                    <div className="image-add-product-in-list">
                        <img class="thumbnail" src={data.photourl[0]} />
                    </div>
                    <div className="d-flex flex-wrap ml-1-v">
                        <span className="w-100 color-third">#{data._id}</span>
                        <span className="w-100 color-second">{data.productname}</span>
                    </div>
                </div>
            </Link>
            <div className="w-50 d-flex align-items-center">
                <Link to="/admin/product/:productId" className="w-50">
                    <div className="w-50">
                        <span className=" color-third">IN STOCK : {data.quantity}</span>
                    </div>
                </Link>
                <div className="w-50 d-flex justify-content-end align-items-center">
                    <div class={`mr-1-v ${activeBtn === true ? "toggle-wrapper" : "toggle-wrapper-off"}`} onClick={toggleBtn}>
                        <div class={`toggle-circle ${activeBtn === true ? "on" : "off"}`}></div>
                    </div>
                    <div className="d-flex align-items-center">
                        <img alt="" src={del} className="image-product-delect" />
                    </div>

                </div>
            </div>
        </div>

    );
}
export default AddListProduct;