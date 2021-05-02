import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import C1img from "../../images/carousel/crs_1.png";
import C2img from "../../images/Group449.png";
import C3img from "../../images/Group448.png";
import C4img from "../../images/carousel/crs_4.png";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductSale from "../../components/Products_Sale/Products_Sale";
import { useQuery } from '@apollo/client'
import { PRODUCTS_QUERY, PROMOTIONS_SALE_QUERY } from '../../graphql/productsOGQuery.js'

function Home() {
  const dataSale = useQuery(PROMOTIONS_SALE_QUERY).data
  const { loading, error, data } = useQuery(PRODUCTS_QUERY)
  const ProSale = dataSale?.promotionSales
  console.log(data?.products)
  const products = data?.products

  const count_product = dataSale?.promotionSales?.length;
  let arr_product_items = []
  let arr_products = []

  for (let i = 0; i < count_product / 4; i++) {
    for (let j = 0; j < 4; j++) {
      let element
      if (ProSale[(i * 4) + j] == null) {
        element = <div className="w-20"><ProductSale data={ProSale[j]} /></div>
      } else {
        element = <div className="w-20"><ProductSale data={ProSale[(i * 4) + j]} /></div>
      }
      arr_product_items.push(element)
    }

    const element = <Carousel.Item className="d-flex flex-row justify-content-center" interval={6000}>
      {
        arr_product_items.map(function (element, index) {
          return element
        })
      }
    </Carousel.Item>;

    arr_products.push(element)
    arr_product_items = []
  }

  // console.log(arr_products)
  return (

    <div className="mx-auto w-90">
      <div className="carousel d-flex justify-content-center flex-column">
        <div><Carousel id="crs">
          <Carousel.Item interval={4000}>
            <img className="d-block w-100" src={C1img} alt="First slide" />
            <Carousel.Caption className="crs_desc">
              <h3>DISCOUNT UP TO 30%</h3>
              <p>MORE AND MORE PROMOTION</p>
              <Link to="/products">
                <Button className="btn-smyar" variant="outline-light">DISCOVER NOW</Button>
              </Link>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img className="d-block w-100" src={C2img} alt="Second slide" />
            <Carousel.Caption className="crs_desc">
              <h3>LOOKING FOR SOME COOL CLOTH?</h3>
              <Link to="/products">
                <Button className="btn-smyar" variant="outline-light">DISCOVER NOW</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img className="d-block w-100" src={C3img} alt="Third slide" />
            <Carousel.Caption className="crs_desc">
              <h3>BUY MORE FOR CHEAPER PRICE</h3>
              <p>
                MORE YOU BUY MORE YOU GET
            </p>
              <Link to="/products">
                <Button className="btn-smyar" variant="outline-light">DISCOVER NOW</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>


        <div className="d-flex flex-row ">
          <div id="left_area" className="left-area d-flex flex-column flex-50 align-items-center justify-content-center">
            <h3>TIME PROMOTIONS</h3>
            <Link to="/promotions"><Button className="btn-smyar" variant="outline-dark">CHECK OUT -&gt;</Button></Link>

          </div>

          <div id="right_area" className="d-flex align-items-center right_area flex-100">
            <Carousel fade id="crs" className="sub-carousel">
              {
                arr_products.map(function (element, index) {
                  return element
                })
              }
            </Carousel>
          </div>

        </div>

        {/* <div className="d-flex flex-100 flex-wrap">
          {
            products.map(function (element, index) {
              return <div className="w-25">
                <ProductCard data={element} />
              </div>
            })
          }

        </div> */}
        <div className="w-90 mt-1-v d-flex justify-content-start flex-wrap mx-auto">
          <h4 className="mr-auto">MORE PRODUCTS</h4>
          <div className="w-100 d-flex flex-wrap">
            {
              data?.products?.map(function (element, index) {
                return <div className="w-20">
                  <ProductCard data={element} />
                </div>
              })
            }
            {/* {
              data?.products?.map(function (products) {
                return <div className="w-20">
                  <ProductCard
                    name={products?.productname}
                    price={products?.price}
                    promotion={products?.description}
                    img={products?.photourl}
                  />
                </div>
              })
            } */}
          </div>

        </div>

        <div className="w-90 mt-1-v d-flex justify-content-center flex-wrap mx-auto my-5">
          <Link to="/products">
            <Button className="btn-smyar" variant="outline-dark">DISCOVER MORE</Button>
          </Link>
        </div>


      </div>
    </div>
  );
}

export default Home;
