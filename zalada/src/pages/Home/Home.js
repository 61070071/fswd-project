import "./Home.css";
import React, { useState } from "react";
import { Carousel, Button, Modal, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import C1img from "../../images/carousel/crs_1.png";
import C2img from "../../images/carousel/crs_2.png";
import C3img from "../../images/carousel/crs_3.png";
import C4img from "../../images/carousel/crs_4.png";
function Card_Carousal(props) {
  return (
    <Card style={{ width: "16rem", marginLeft: "2%", marginRight: "2%" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Button variant="primary">Go somewhere</Button>
      <Card.Body>
        <Card.Title>{props.product}</Card.Title>
        <Card.Text>
          1553 ฿
        </Card.Text>

      </Card.Body>
    </Card>
  );
}
function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <Carousel.Item className="d-flex flex-row justify-content-center">
                  <Card_Carousal product="Jacket 1" />
                  <Card_Carousal product="Jacket 2" />
                  <Card_Carousal product="Jacket 3" />
                </Carousel.Item>
                <Carousel.Item className="d-flex flex-row justify-content-center">
                  <Card_Carousal product="Jacket 4" />
                  <Card_Carousal product="Jacket 5" />
                  <Card_Carousal product="Jacket 6" />
                </Carousel.Item>
                <Carousel.Item className="d-flex flex-row justify-content-center">
                  <Card_Carousal product="Jacket 7" />
                  <Card_Carousal product="Jacket 8" />
                  <Card_Carousal product="Jacket 9" />
                </Carousel.Item>
              </Carousel>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
