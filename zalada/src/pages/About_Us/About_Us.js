import "./About_Us.css";

import { Card, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import C1img from "../../images/carousel/crs_1.png";
import C2img from "../../images/carousel/crs_2.png";
import C3img from "../../images/carousel/crs_3.png";
import C4img from "../../images/carousel/crs_4.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Card_Carousal(props) {
  return (
    <Card style={{ width: "16rem" ,marginLeft:"2%",marginRight:"2%"}}>
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
function About_Us() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="">
      <div className="d-flex flex-row  justify-content-around f-con">
        <div id="left_area" className="left-area">
          <h1>TEST</h1>
        </div>

        <div className="d-flex sub-slide align-items-center">
          {/* <Slider {...settings} className="bg-secondary ">
            <Card_Carousal />
            <Card_Carousal />
            <Card_Carousal />
            <Card_Carousal />
            <Card_Carousal />
            <Card_Carousal />
          </Slider> */}
          <Carousel fade id="crs" className="">
            <Carousel.Item className="d-flex flex-row justify-content-center">
              <Card_Carousal product="Jacket 1"/>
              <Card_Carousal product="Jacket 2"/>
              <Card_Carousal product="Jacket 3"/>
            </Carousel.Item>
            <Carousel.Item className="d-flex flex-row justify-content-center">
              <Card_Carousal product="Jacket 4"/>
              <Card_Carousal product="Jacket 5"/>
              <Card_Carousal product="Jacket 6"/>
            </Carousel.Item>
            <Carousel.Item  className="d-flex flex-row justify-content-center">
              <Card_Carousal product="Jacket 7"/>
              <Card_Carousal product="Jacket 8"/>
              <Card_Carousal product="Jacket 9"/>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default About_Us;
