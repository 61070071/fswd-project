import React from "react";
import "./AddListProduct.css";
import ThirdDot from "../../images/third-dot.svg"
function AddListProduct({ data }) {

    return (
        <div className="w-100 d-flex mt-1-v box-add-list-product">
            <div className="w-50 d-flex align-items-center">
                <div className="image-add-product-in-list">
                    <img alt="" src={data.image} />
                </div>
                <div className="d-flex flex-wrap ml-1-v">
                <span className="w-100">#{data.id}</span>
                <span className="w-100 color-second">{data.name}</span>
                </div>
                
            </div>
            <div className="w-50 d-flex align-items-center">
                <div className="w-50">
                    <span>IN STOCK : {data.stock}</span>
                </div>
                <div className="w-50 d-flex justify-content-end">
                    <span className="mr-1-v">Btn Active</span>
                    <img alt="" src={ThirdDot}/>
                </div>
            </div>
        </div>
    );
}
export default AddListProduct;