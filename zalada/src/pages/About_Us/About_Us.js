import "./About_Us.css";
import React from "react";

// import { Card, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Faii from "../../images/faii.svg"
import Jay from "../../images/jay.svg"
import Deen from "../../images/deen.svg"
import Tin from "../../images/tin.svg"
import facebook from "../../images/facebook.svg"
import HomeLogo from "../../images/Zalada.svg"
// import Slider from "react-slick";
// import C1img from "../../images/carousel/crs_1.png";
// import C2img from "../../images/carousel/crs_2.png";
// import C3img from "../../images/carousel/crs_3.png";
// import C4img from "../../images/carousel/crs_4.png";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

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
function About_Us() {
   // const settings = {
   //   dots: false,
   //   infinite: true,
   //   speed: 500,
   //   slidesToShow: 3,
   //   slidesToScroll: 1,
   //   nextArrow: <SampleNextArrow />,
   //   prevArrow: <SamplePrevArrow />,
   // };

   return (
      <div className="d-flex justify-content-center align-items-center mt-2-v flex-column">
         <div className="w-100 line-top-bottom-gray text-center">
            <img alt="" className="home_logo" src={HomeLogo} />
            <p className="fs-2-v m-0">About Us</p>
            <p className="fs-1-v">งานแรกมันรอดยาก</p>
         </div>
         <div className="w-50">
            <div className="d-flex flex-column justify-content-center">
               <div className="d-flex justify-content-center align-items-center">
                  <div className="text-center">
                     <img alt="" className="img_us" src={Jay}></img>
                     <p>ขี้เพี้ยะ</p>
                  </div>
                  <p>ถ้าอยากรู้เรื่องราวให้กระจ่าง พวกเราก็พร้อมที่จะแถลงไข</p>
                  {/* <img src={facebook}></img> */}
               </div>
               <div className="d-flex justify-content-center align-items-center">
                  <p>เพื่อปกป้องไม่ให้โลกถูกทำลาย เพื่อปกป้องสันติภาพของโลก</p>
                  <div className="text-center">
                     <img alt="" className="img_us" src={Tin}></img>
                     <p>ตินคงควย</p>
                  </div>
                  {/* <img src={facebook}></img> */}
               </div>
               <div className="d-flex justify-content-center align-items-center">
                  <div className="text-center">
                     <img alt="" className="img_us" src={Deen}></img>
                     <p>เจได 2.9 นิ้ว</p>
                  </div>
                  <p>บรรลุถึงความชั่วแห่งความกล้าหาญและความรัก</p>
                  {/* <img src={facebook}></img> */}
               </div>
               <div className="d-flex justify-content-center align-items-center">
                  <p>ตัวโกงผู้แสนน่ารักและมีเสน่ห์ มุซาชิ! โคจิโร่!<br></br>เรา 2 คน แก๊งร็อกเก็ตแห่งจักรวาล ไวต์โฮล</p>
                  <div className="text-center">
                     <img alt="" className="img_us" src={Faii}></img>
                     <p>ฝ้ายเองงับ</p>
                  </div>
                  <div className="text-center">
                     <img alt="" className="img_us" src={Tin}></img>
                     <p>ตินคงควย</p>
                  </div>
                  {/* <img src={facebook}></img> */}
               </div>
               <div className="d-flex justify-content-center align-items-center">
                  <div className="text-center">
                     <img alt="" className="img_us" src={Jay}></img>
                     <p>ขี้เพี้ยะ</p>
                  </div>
                  <p>พรุ่งนี้ที่สดใสรอเราอยู่</p>
                  {/* <img src={facebook}></img> */}
               </div>
               <div className="d-flex justify-content-center align-items-center">
                  <p>ส่วนฉันก็เนียร์ธไง!</p>
                  <div className="text-center">
                     <img alt="" className="img_us" src={Deen}></img>
                     <p>เจได 2.9 นิ้ว</p>
                  </div>
                  {/* <img src={facebook}></img> */}
               </div>
               {/* <p>โปรเจคนี้เป็นส่วนหนึ่งของวิชา Full Stack สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหาร ลาดกระบัง

               </p> */}
            </div>
         </div>
      </div>
   );
}

export default About_Us;
