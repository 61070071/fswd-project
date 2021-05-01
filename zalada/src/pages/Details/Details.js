import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import "../../App.css"
import "./Details.css";
import Plus from "../../images/add-product.svg"
import Minus from "../../images/del-product.svg"
import { useLazyQuery } from '@apollo/client'
import { PRODUCT_QUERY_ID } from '../../graphql/productsOGQuery.js'
function Details() {
    const { productId } = useParams();
    const [countAdd, setCountAdd] = useState(1);
    const [selectProduct, setSelectProduct] = useState(0);
    const [product, setProduct] = useState({});
    const [getProduct, { loading, error }] = useLazyQuery(PRODUCT_QUERY_ID, {
        variables: { productId },
        onCompleted: data => {
            // console.log(data);
            setProduct(data?.productById)
        }
    })
    const shirts = product
    useEffect(() => {
        getProduct()

    }, [getProduct])

    console.log(product?.photourl);

    const handleImage = (e) => {
        setSelectProduct(e)
    }

    // if (loading) {
    //     return 'Loading ...'
    // }
    // if (error) {
    //     return 'Error !!'
    // }
    const productBox = useMemo(() => {
        return (
            <div className="w-70 mx-auto d-flex">
                <div className="w-50 d-flex">
                    {/* <div className="w-25 d-flex flex-column">

                        <div className="w-80 bg-white shirt"
                            onClick={() => handleImage(0)}
                        ><img alt="" className="w-100" src={shirts?.photourl} /></div>
                        <div className="w-80 bg-white shirt mt-1-v"
                            onClick={() => handleImage(1)}
                        ><img alt="" className="w-100" src={shirts?.photourl} /></div>
                        <div className="w-80 bg-white shirt mt-1-v"
                            onClick={() => handleImage(2)}
                        ><img alt="" className="w-100" src={shirts?.photourl} /></div>


                    </div> */}
                    <div className="w-75 shirt">
                        <img alt="" className="w-100" src={shirts?.photourl} />
                    </div>

                </div>
                <div className="w-50 px-2-v d-flex flex-column">
                    <span className="fs-1-5-v">{shirts.productname}</span>
                    <span className="color-main fs-1-v">{shirts.productname}</span>
                    <div className="mt-2-v"><span className="color-second details_price font-weight-bold fs-1-v">฿ {shirts.price} </span><span className="color-second details_sale font-weight-bold">{shirts.price}</span></div>
                    <span className="fs-0-8-v mb-0-5-v">Status : <span className="text_status">{shirts.productdescription}</span></span>
                    <hr className="w-25 m-0" />
                    <div className="w-75 mt-0-5-v">
                        <p className="color-third fs-1-v">{shirts.productdescription}</p>
                    </div>
                    <div className="d-flex w-90">
                        <div className="d-flex w-30 justify-content-evenly align-items-center mx-auto">
                            <div className="btn-change-amount d-flex align-items-center" onClick={setCountAdd(countAdd - 1)}>
                                <img alt="" src={Minus} />
                            </div>
                            <div className="num_buy"><span>{countAdd}</span></div>
                            <div className="btn-change-amount d-flex align-items-center" onClick={setCountAdd(countAdd + 1)}>
                                <img alt="" src={Plus} />
                            </div>
                        </div>
                        <button className="w-50 bg-second border-0 color-white mx-auto font-weight-bold">ADD TO YOUR CART</button>
                    </div>
                </div>
            </div>
        )
    }, [shirts, product, loading])
    return (
        <div className="w-100 bg-main py-3-v">
            <div className="w-90 mx-auto box-details py-1-5-v bg-white">
                {productBox}
                {/* <hr className="mt-2-v w-90" />
                <div className="mt-2-v w-90 mx-auto">
                    <h2 className="font-weight-bold color-third">DESCRIPTION</h2>
                    <span className="mt-1-5-v">{shirts.productdescription}</span>
                </div> */}
            </div>
        </div >
    )
}

export default Details;