import React, { useState } from "react";
import "../../App.css"
import "./Details.css";
import BrownShirt from "../../images/brown_shirt.svg"
import BlackShirt from "../../images/black_shirt.svg"
import RedShirt from "../../images/red_shirt.svg"
import Plus from "../../images/add-product.svg"
import Minus from "../../images/del-product.svg"
function Details() {
    const [selectProduct, setSelectProduct] = useState(0);
    const shirts = [{
        name: "Modern Pastel Lamp",
        img: BrownShirt,
        sale: "฿ 350",
        price: "฿ 270",
        status: "Available to order",
        short_desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero",
        long_desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"

    },
    {
        name: "Modern Pastel Lamp(BLACK)",
        img: BlackShirt,
        sale: "฿ 350",
        price: "฿ 250",
        status: "Available to order",
        short_desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero",
        long_desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    },
    {
        name: "Modern Pastel Lamp(RED)",
        img: RedShirt,
        sale: "฿ 350",
        price: "฿ 260",
        status: "Available to order",
        short_desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero",
        long_desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    }
    ]
    const handleImage = (e) => {
        setSelectProduct(e)
    }
    return (
        <div className="w-100 bg-main py-3-v">
            <div className="w-90 mx-auto box-details py-1-5-v bg-white">
                <div className="w-75 mx-auto d-flex">
                    <div className="w-50 d-flex">
                        <div className="w-25 d-flex flex-column">
                            <div className="w-80 bg-white shirt"
                            onClick={ () => handleImage(0)}
                            ><img alt="" className="w-100" src={shirts[0].img} /></div>
                            <div className="w-80 bg-white shirt mt-1-v"
                            onClick={ () => handleImage(1)}
                            ><img alt="" className="w-100" src={shirts[1].img} /></div>
                            <div className="w-80 bg-white shirt mt-1-v"
                            onClick={ () => handleImage(2)}
                            ><img alt="" className="w-100" src={shirts[2].img} /></div>


                        </div>
                        <div className="w-75 shirt">
                            <img alt="" className="w-100" src={shirts[selectProduct].img} />
                        </div>

                    </div>
                    <div className="w-50 px-2-v">
                        <h2>{shirts[selectProduct].name}</h2>
                        <h4 className="color-main">{shirts[selectProduct].name}</h4>
                        <div className="mt-2-v"><span className="color-second details_price font-weight-bold">{shirts[selectProduct].price} </span><span className="color-second details_sale font-weight-bold">{shirts[selectProduct].sale}</span></div>
                        <p>Status : <span className="text_status">{shirts[selectProduct].status}</span></p>
                        <hr className="w-25 m-0" />
                        <div className="w-75 mt-0-5-v">
                            <p className="text_desc">{shirts[selectProduct].short_desc}</p>
                        </div>
                        <div className="d-flex w-90">
                            <div className="d-flex w-30 justify-content-evenly align-items-center mx-auto">
                                <img alt="" src={Minus} />
                                <div className="num_buy"><span>1</span></div>
                                <img alt="" src={Plus} />
                            </div>
                            <button className="w-50 bg-second border-0 color-white mx-auto font-weight-bold">ADD TO YOUR CART</button>
                        </div>
                    </div>
                </div>
                <hr className="mt-2-v w-90" />
                <div className="mt-2-v w-90 mx-auto">
                    <h2 className="font-weight-bold color-third">DESCRIPTION</h2>
                    <span className="mt-1-5-v">{shirts[selectProduct].long_desc}</span>
                </div>
            </div>
        </div >
    )
}

export default Details;