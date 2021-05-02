import React, { useState, useCallback } from "react";
import "./AddAdminPromotions.css";
import del from "../../images/icon-delect.svg"
import { useHistory } from 'react-router'
import { useMutation } from '@apollo/client'
import { REMOVE_PROMOTION_SALE } from '../../graphql/removeProductMutation';

function AddAdminPromotions({ data }) {
    const [createProduct] = useMutation(REMOVE_PROMOTION_SALE)
    const history = useHistory()
    const productId = data._id
    const handleDelete = useCallback(
        async (e) => {
            e.preventDefault()
            console.log(productId);
            try {
                await createProduct({ variables: { productId } })
                history.push('/admin/promotions')
                window.location.href = '/admin/promotions'
                alert('Promotion Delete')
            } catch (err) {
                console.log(err)
                alert('Promotion Delete failed')
                // console.log(product);

            }
        },
        [createProduct, history],
    )
    return (
        <div className="w-100 d-flex mt-1-v box-add-list-product">
            <div className="w-20 d-flex align-items-center">
                <div className="image-add-product-in-list">
                    <img alt="" src={data.photourl} />
                </div>
                <div className="d-flex flex-wrap ml-1-v">
                    <span className="w-100 fs-1-v">#{data._id}</span>
                    <span className="w-100 color-second fs-0-8-v">{data.productname}</span>
                </div>

            </div>
            <div className="w-50 d-flex align-items-center justify-content-center">
                <span className="fs-1-v">IN STOCK : {data.quantity}</span>
            </div>
            <div className="w-30 d-flex align-items-center justify-content-start py-0-5-v">
                <div className="d-flex  w-40 flex-wrap flex-column align-items-start">
                    <span className="fs-0-9-v">TOTAL DEALS : </span>
                </div>
                <div className="w-30 d-flex flex-column justify-content-end ml-1-v">
                    <span className="color-no-6 fs-0-9-v">{data.discount} %</span>
                </div>
            </div>
            <div className="d-flex w-5 justify-content-center align-items-center" onClick={handleDelete}>
                <img alt="" src={del} className="image-del-admin-promotion" />
            </div>
        </div>
    );
}
export default AddAdminPromotions;