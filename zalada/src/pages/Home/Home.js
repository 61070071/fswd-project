import "./Home.css";
import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import C1img from "../../images/carousel/crs_1.png";
import C2img from "../../images/carousel/crs_2.png";
import C3img from "../../images/carousel/crs_3.png";
import C4img from "../../images/carousel/crs_4.png";
import TestImg from "../../images/leather_jacket_PNG41.png";
import PromotionProduct from "../../components/PromotionProduct/PromotionProduct";
// function Card_Carousal(props) {
//   return (
//     <Card style={{ width: "16rem", marginLeft: "2%", marginRight: "2%" }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Button variant="primary">Go somewhere</Button>
//       <Card.Body>
//         <Card.Title>{props.product}</Card.Title>
//         <Card.Text>
//           1553 ฿
//         </Card.Text>

//       </Card.Body>
//     </Card>
//   );
// }
function Home() {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const products = [{
    img: TestImg,
    promotion: "30% WHEN BUY 2",
    name: "JEANS JACKET1",
    price: "1,553 ฿",
  }, {
    img: TestImg,
    promotion: "30% WHEN BUY 2",
    name: "JEANS JACKET2",
    price: "1,553 ฿",
  }, {
    img: TestImg,
    promotion: "30% WHEN BUY 2",
    name: "JEANS JACKET3",
    price: "1,553 ฿",
  }, {
    img: TestImg,
    promotion: "30% WHEN BUY 2",
    name: "JEANS JACKET4",
    price: "1,553 ฿",
  }, {
    img: TestImg,
    promotion: "30% WHEN BUY 2",
    name: "JEANS JACKET5",
    price: "1,553 ฿",
  }, {
    img: TestImg,
    promotion: "30% WHEN BUY 2",
    name: "JEANS JACKET6",
    price: "1,553 ฿",
  },
  {
    img: TestImg,
    promotion: "30% WHEN BUY 2",
    name: "JEANS JACKET BLACK7",
    price: "1,450 ฿",
  },
  {
    img: TestImg,
    promotion: "30% WHEN BUY 2",
    name: "JEANS JACKET RED8",
    price: "1,500 ฿",
  },
  {
    img: TestImg,
    promotion: "30% WHEN BUY 2",
    name: "JEANS JACKET GREEN9",
    price: "1,650 ฿",
  },
  {
    img: TestImg,
    promotion: "30% WHEN BUY 2",
    name: "JEANS JACKET BLUE10",
    price: "1,850 ฿",
  }]
  const count_product = products.length;
  let arr_product_items = []
  let arr_products = []

  for (let i = 0; i < count_product / 4; i++) {
    for (let j = 0; j < 4; j++) {
      let element
      if (products[(i * 4) + j] == null) {
        element = <div className="w-20"><PromotionProduct data={products[j]} /></div>
      } else {
        element = <div className="w-20"><PromotionProduct data={products[(i * 4) + j]} /></div>
      }
      arr_product_items.push(element)
    }

    const element = <Carousel.Item className="d-flex flex-row justify-content-center">
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
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={C1img} alt="First slide" />
            <Carousel.Caption className="crs_desc">
              <h3>DISCOUNT UP TO 30%</h3>
              <p>MORE AND MORE PROMOTION</p>
              <Button className="btn-smyar" variant="outline-light">DISCOVER NOW</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={C2img} alt="Second slide" />
            <Carousel.Caption className="crs_desc">
              <h3>LOOKING FOR ELECTRIC STUFF?</h3>
              <p>SAY NO MORE, FAM</p>
              <Button variant="outline-light">DISCOVER NOW</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={C3img} alt="Third slide" />
            <Carousel.Caption className="crs_desc">
              <h3>STOCKING UP THESE FOOD</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
              <Button variant="outline-light">DISCOVER NOW</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={C4img} alt="Fourth slide" />
            <Carousel.Caption className="crs_desc">
              <h3>PACKING YOUR STUFF</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
              <Button variant="outline-light">DISCOVER NOW</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>


        <div className="d-flex flex-row">
          <div id="left_area" className="left-area d-flex flex-column flex-50">
            <h1>TEST</h1>
            <Button className="btn-smyar" variant="outline-primary">CHECK OUT =></Button>
          </div>

          <div id="right_area" className="d-flex align-items-center right_area">
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
                <PromotionProduct data={element} />
              </div>
            })
          }

        </div> */}
        <div className="w-90 mt-1-v d-flex justify-content-start flex-wrap mx-auto">
          <span className="mx-auto">MORE PRODUCTS</span>
          <div className="w-100 d-flex flex-wrap">
            {
              products.map(function (element, index) {
                return <div className="w-20">
                  <PromotionProduct data={element} />
                </div>
              })
            }
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
