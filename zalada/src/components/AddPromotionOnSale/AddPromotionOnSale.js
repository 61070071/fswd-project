import React from "react";
function AddPromotionOnSale({ data,index }) {
    return (
        <div className="w-95 d-flex align-items-center">
            <div className="w-10 d-flex justify-content-center mx-auto">
                <span className="py-0-5-v fs-0-8-v" name="product_no">{data.product_no}</span>
            </div>
            <div className="w-10 d-flex justify-content-center mx-auto">
                <span className="py-0-5-v fs-0-8-v color-second" name="product_name">{data.product_name}</span>
            </div>
            <div className="w-10 d-flex justify-content-center mx-auto">
                <span className="py-0-5-v fs-0-8-v text-center color-second" name="product_category">{data.product_category}</span>
            </div>
            <div className="w-10 d-flex justify-content-center mx-auto">
                <span className="py-0-5-v fs-0-8-v color-second" name="pro_discount">{data.pro_discount}</span>
            </div>
            <div className="w-10 d-flex justify-content-center mx-auto">
                <span className="py-0-5-v fs-0-8-v text-center color-second" name="pro_start">{data.pro_start}</span>
            </div>
            <div className="w-10 d-flex justify-content-center mx-auto">
                <span className="py-0-5-v fs-0-8-v text-center color-second" name="pro_end">{data.pro_end}</span>
            </div>
        </div>
    );
}
export default AddPromotionOnSale;