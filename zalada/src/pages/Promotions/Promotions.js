import React from "react";
import "../../App.css"
import "./Promotions.css";
import Img_Promotions from "../../images/Group_429.svg"
import Img_Sale from "../../images/585680404f6ae202fedf26f0.svg"
import ProductSale from "../../components/Products_Sale/Products_Sale";
import PromotionProduct from "../../components/PromotionProduct/PromotionProduct"
import { useQuery } from '@apollo/client'
import { PROMOTIONS_FREE_QUERY, PROMOTIONS_SALE_QUERY } from '../../graphql/productsOGQuery.js'
function Promotion() {
    const dataSale = useQuery(PROMOTIONS_SALE_QUERY).data
    const dataFree = useQuery(PROMOTIONS_FREE_QUERY).data
    
    const ProSale = dataSale?.promotionSales
    const ProFree = dataFree?.promotionFrees
    console.log(ProFree)

    return (
        <div className="w-90 mx-auto">
            <p className="color-main mt-0-5-v">HOME &gt; PROMOTIONS</p>
            <div className="w-100">
                <img alt="" className="w-100" src={Img_Promotions} />
            </div>
            <div className="w-90 mt-2-5-v d-flex justify-content-center flex-wrap mx-auto">
                <span className="mx-auto">HOT DEAL</span>
                <div className="w-100 d-flex flex-wrap">
                    {
                        ProSale?.map(function (element, index) {
                            return <div className="w-20">
                                <ProductSale data={element} />
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="w-90 mt-1-v d-flex justify-content-center flex-wrap mx-auto">
                <span className="mx-auto">BUY MORE FOR CHEAPER</span>
                <div className="w-100 d-flex flex-wrap">
                    {
                        ProFree?.map(function (element, index) {
                            return <div className="w-20">
                                <PromotionProduct data={element} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Promotion;