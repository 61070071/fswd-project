import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import "../../App.css"
import "./PromotionDetailsFree.css";
import Plus from "../../images/add-product.svg"
import Minus from "../../images/del-product.svg"
import { useLazyQuery } from '@apollo/client'
import { FREE_QUERY_ID } from '../../graphql/productsOGQuery.js';
import { Link } from "react-router-dom";
function Details() {
    const { productId } = useParams();
    const [countAdd, setCountAdd] = useState(0);
    const handleClick = () => setCountAdd(countAdd + 1);
    const [product, setProduct] = useState({});
    const [getProduct, { loading, error }] = useLazyQuery(FREE_QUERY_ID, {
        variables: { productId },
        onCompleted: data => {
            // console.log(data);
            setProduct(data?.promotionFreeById)
        }
    })
    const shirts = product
    useEffect(() => {
        getProduct()

    }, [getProduct])
    // if (loading) {
    //     return 'Loading ...'
    // }
    // if (error) {
    //     return 'Error !!'
    // }
    const productBox = useMemo(() => {
        return (
            <div className="w-70 mx-auto d-flex align-items-start">
                <div className="w-50 d-flex justify-content-center">
                    <div className="w-75 shirt">
                        <img alt="" className="w-100" src={shirts?.photourl} />
                    </div>
                </div>
                <div className="w-50 px-2-v d-flex flex-column mt-1-v">
                    <div className="d-flex flex-column">
                        <span className="fs-1-5-v">{shirts.productname}</span>
                        <span className="text_promotion text-uppercase fs-1-v w-45 mt-0-5-v">buy {shirts.buy} get free {shirts.free} !</span>
                    </div>
                    <div className="d-flex flex-column mt-1-v">
                        <div className="">
                            <span className="color-second details_price font-weight-bold fs-1-v">฿ {shirts.price} </span>
                        </div>
                        <span className="fs-0-8-v mb-0-5-v mt-0-5-v">IN STOCK : <span className="text_status">{shirts.quantity}</span></span>
                        <hr className="w-25 m-0" />
                        <div className="w-75 mt-1-v">
                            <p className="color-third fs-1-v">{shirts.productdescription}</p>
                        </div>
                        <hr className="w-25 m-0" />
                        <span className="fs-0-8-v mb-0-5-v mt-0-5-v">CATAGORY : <span className="text_status">{shirts.catagory}</span></span>
                        <div className="d-flex w-90">
                            <div className="d-flex w-30 justify-content-evenly align-items-center mx-auto">
                                <button className="btn-change-amount d-flex align-items-center" onClick={handleClick}>
                                    <img alt="" src={Minus} />
                                </button>
                                <div className="num_buy">
                                    <span>{countAdd}</span>
                                </div>
                                <button className="btn-change-amount d-flex align-items-center" onClick={handleClick}>
                                    <img alt="" src={Plus} />
                                </button>
                            </div>
                            <Link to="/cart" className="h-100 w-60 d-flex align-items-center"><button className="py-0-5-v w-90 bg-second border-0 color-white mx-auto font-weight-bold fs-0-8-v" type="submit">ADD TO YOUR CART</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }, [shirts, product, loading])
    return (
        <div className="w-100 bg-main py-3-v h-100-vh">
            <div className="w-90 mx-auto box-details py-3-v bg-white">
                {productBox}
            </div>
        </div >
    )
}

export default Details;

