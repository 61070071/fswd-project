import "./Home.css";
import React ,{useState} from "react";
import { Carousel, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import C1img from "../../images/carousel/crs_1.png";
import C2img from "../../images/carousel/crs_2.png";
import C3img from "../../images/carousel/crs_3.png";
import C4img from "../../images/carousel/crs_4.png";

function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
    <div className="mx-auto w-90">
      <div className="carousel d-flex justify-content-center">
        <Carousel id="crs">
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
    </div>
  );
}

export default Home;
