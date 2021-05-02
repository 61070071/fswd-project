import React, { useState } from "react";
import "./AddListProduct.css";
import ThirdDot from "../../images/third-dot.svg"
import { Link } from "react-router-dom";
function AddListProduct({ data }) {
    
    const [activeBtn, setActiveBtn] = useState(true);

    function toggleBtn() {
        setActiveBtn(!activeBtn);
    }
    return (
         <Link to={`/admin/product/${data._id}`} onClick={() => window.location.href=`/admin/product/${data._id}`}> 
         {/* /admin/product/:productId */}
            <div className="w-100 d-flex mt-1-v box-add-list-product">
                <div className="w-50 d-flex align-items-center">
                    <div className="image-add-product-in-list">
                        <img class="thumbnail" src={data.photourl[0]} />
                    </div>
                    <div className="d-flex flex-wrap ml-1-v">
                        <span className="w-100 color-third">#{data._id}</span>
                        <span className="w-100 color-second">{data.productname}</span>
                    </div>
                </div>
                <div className="w-50 d-flex align-items-center">
                    <div className="w-50">
                        <span className=" color-third">IN STOCK : {data.quantity}</span>
                    </div>
                    <div className="w-50 d-flex justify-content-end">
                        <div class="toggle-wrapper mr-1-v" onClick={toggleBtn}>
                            <div class={`toggle-circle ${activeBtn === true ? "on" : "off"}`}></div>
                        </div>
                        <img alt="" src={ThirdDot} />
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default AddListProduct;