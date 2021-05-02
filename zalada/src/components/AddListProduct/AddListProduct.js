import React, { useState,useCallback } from "react";
import "./AddListProduct.css";
import del from "../../images/icon-delect.svg"
import { Link } from "react-router-dom";
import { useHistory } from 'react-router'
import { useMutation } from '@apollo/client'
import { REMOVE_PRODUCT } from '../../graphql/removeProductMutation';
function AddListProduct({ data }) {
    const [createProduct] = useMutation(REMOVE_PRODUCT)
    const history = useHistory()
    const productId = data._id
    const handleDelete = useCallback(
        async (e) => {
            e.preventDefault()
            console.log(productId);
            try {
                await createProduct({ variables: { productId } })
                history.push('/admin/products')
                window.location.href = '/admin/products'
                alert('Product Delete')
            } catch (err) {
                console.log(err)
                alert('Product Delete failed')
                // console.log(product);

            }
        },
        [createProduct, history],
    )
    const [activeBtn, setActiveBtn] = useState(data.isActive);

    function toggleBtn() {
        setActiveBtn(!activeBtn);
    }
    return (

        <div className="w-100 d-flex mt-1-v box-add-list-product">
            <Link to={`/admin/product/${data._id}`} onClick={() => window.location.href=`/admin/product/${data._id}`} className="w-50">
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
                <Link to={`/admin/product/${data._id}`} onClick={() => window.location.href=`/admin/product/${data._id}`} className="w-50">
                    <div className="w-50">
                        <span className=" color-third">IN STOCK : {data.quantity}</span>
                    </div>
                </Link>
                <div className="w-50 d-flex justify-content-end align-items-center">
                    <div class={`mr-1-v ${activeBtn === true ? "toggle-wrapper" : "toggle-wrapper-off"}`} onClick={toggleBtn}>
                        <div class={`toggle-circle ${activeBtn === true ? "on" : "off"}`}></div>
                    </div>
                    <div className="d-flex align-items-center" onClick={handleDelete}>
                        <img alt="" src={del} className="image-product-delect" />
                    </div>

                </div>
            </div>
        </div>

    );
}
export default AddListProduct;