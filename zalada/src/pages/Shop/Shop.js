import React, { useState } from "react";
import "../../App.css"
import "./Shop.css";
import Img_Shop from "../../images/Component_3.svg"
import ProductCard from "../../components/ProductCard/ProductCard";
import TestImg from "../../images/leather_jacket_PNG41.png";
import { useQuery } from '@apollo/client'
import { PRODUCTS_QUERY } from '../../graphql/productsOGQuery.js'
function Shop() {
  const [activeFilter, setActiveFilter] = useState(true);
  const [activePromotions, setActivePromotions] = useState(true);
  const [activeProducts, setActiveProducts] = useState(true);
  const [activePrice, setActivePrice] = useState(true);
  const { loading, error, data } = useQuery(PRODUCTS_QUERY)
  // const products = [{
  //   img: TestImg,
  //   promotion: "30% WHEN BUY 2",
  //   name: "JEANS JACKET",
  //   price: "1,553 ฿",
  // },
  // {
  //   img: TestImg,
  //   promotion: "30% WHEN BUY 2",
  //   name: "JEANS JACKET BLACK",
  //   price: "1,450 ฿",
  // },
  // {
  //   img: TestImg,
  //   promotion: "30% WHEN BUY 2",
  //   name: "JEANS JACKET RED",
  //   price: "1,500 ฿",
  // },
  // {
  //   img: TestImg,
  //   promotion: "30% WHEN BUY 2",
  //   name: "JEANS JACKET GREEN",
  //   price: "1,650 ฿",
  // },
  // {
  //   img: TestImg,
  //   promotion: "30% WHEN BUY 2",
  //   name: "JEANS JACKET BLUE",
  //   price: "1,850 ฿",
  // }]
  console.log(data?.products)
  const products = data?.products

  function toggleFilter() {
    setActiveFilter(!activeFilter);
  }
  function togglePromotions() {
    setActivePromotions(!activePromotions);
  }
  function toggleProducts() {
    setActiveProducts(!activeProducts);
  }
  function togglePrice() {
    setActivePrice(!activePrice);
  }
  return (
    <div className="page_shop mx-auto">
      <p className="color-main">HOME &gt; SHOP</p>
      <div className="w-100"> <img alt="" className="w-100" src={Img_Shop} /> </div>
      <div className="d-flex w-100">
        <div className="flex-25">
          <div className="d-flex w-100 align-items-center px-1-5-v pt-3-v flex-wrap">
            <div className="d-flex justify-content-start flex-50">
              <span>FILTER</span>
            </div>
            <div className="d-flex justify-content-end flex-50 align-items-center">
              <span className="see_more" onClick={toggleFilter}>{activeFilter ? "+" : "-"}</span>
            </div>
            {
              activeFilter === false &&
              <div className="d-flex w-100 align-items-center flex-wrap mt-0-5-v">
                <div className="d-flex justify-content-start flex-50">
                  <span>PROMOTIONS</span>
                </div>
                <div className="d-flex justify-content-end flex-50">
                  <span className="see_more" onClick={togglePromotions}>{activePromotions ? "+" : "-"}</span>
                </div>
              </div>
            }
            {
              activePromotions === false &&
              <div className="d-flex w-100 align-items-center flex-wrap">
                <span className="color-main ml-1-v flex-100">BUY MORE SAVE MORE</span>
                <span className="color-main ml-1-v flex-100">BEST PRICE</span>
              </div>
            }
            {
              activeFilter === false &&
              <div className="d-flex w-100 align-items-center flex-wrap">
                <div className="d-flex justify-content-start flex-50">
                  <span>PRODUCTS</span>
                </div>
                <div className="d-flex justify-content-end flex-50">
                  <span className="see_more" onClick={toggleProducts}>{activeProducts ? "+" : "-"}</span>
                </div>
              </div>
            }
            {
              activeProducts === false &&
              <div className="d-flex w-100 align-items-center flex-wrap">
                <span className="color-main ml-1-v flex-100">JACKET</span>
                <span className="color-main ml-1-v flex-100">JEANS</span>
                <span className="color-main ml-1-v flex-100">SCARF</span>
                <span className="color-main ml-1-v flex-100">CLOTHS</span>
              </div>
            }
            {
              activeFilter === false &&
              <div className="d-flex w-100 align-items-center flex-wrap">
                <div className="d-flex justify-content-start flex-50">
                  <span>PRICE</span>
                </div>
                <div className="d-flex justify-content-end flex-50">
                  <span className="see_more" onClick={togglePrice}>{activePrice ? "+" : "-"}</span>
                </div>
              </div>
            }
            {
              activePrice === false &&
              <div className="d-flex w-100 align-items-center flex-wrap">
                <span className="color-main ml-1-v flex-100">1000 +</span>
                <span className="color-main ml-1-v flex-100">500 +</span>
                <span className="color-main ml-1-v flex-100">300 +</span>
              </div>
            }

          </div>

        </div>
        <div className="d-flex flex-75 flex-wrap">
          {
            data?.products.map(function (element, index) {
              return <div className="w-25">
                <ProductCard data={element} />
              </div>
            })
          }

        </div>
      </div>
    </div >
  )
}

export default Shop;