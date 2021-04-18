import React from "react";
import "../../App.css"
import "./Details.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import BrownShirt from "../../images/brown_shirt.svg"
import BlackShirt from "../../images/black_shirt.svg"
import RedShirt from "../../images/red_shirt.svg"
function Details() {
    const shirts = [{
        name: "Modern Pastel Lamp",
        img: BrownShirt,
        sale: "฿ 350",
        price: "฿ 270",
        status: "Available to order"

    },
    {
        name: "Modern Pastel Lamp",
        img: BlackShirt,
        sale: "฿ 350",
        price: "฿ 250",
        status: "Available to order"
    },
    {
        name: "Modern Pastel Lamp",
        img: RedShirt,
        sale: "฿ 350",
        price: "฿ 260",
        status: "Available to order"
    }
    ]
    return (
        <div className="w-100 bg-main py-3-v">
            <div className="w-90 mx-auto box-details py-1-5-v bg-white">
                <div className="w-75 mx-auto d-flex">
                    <div className="w-50 d-flex">
                        <div className="w-25 d-flex flex-column">
                            <div className="w-80 bg-white shirt"><img className="w-100" src={shirts[0].img} /></div>
                            <div className="w-80 bg-white shirt mt-1-v"><img className="w-100" src={shirts[1].img} /></div>
                            <div className="w-80 bg-white shirt mt-1-v"><img className="w-100" src={shirts[2].img} /></div>


                        </div>
                        <div className="w-75 shirt">
                            <img className="w-100" src={shirts[0].img} />
                        </div>

                    </div>
                    <div className="w-50 px-2-v">
                        <h2>{shirts[0].name}</h2>
                        <h4 className="color-main">{shirts[0].name}</h4>
                        <div className="mt-2-v"><span className="color-second details_price">{shirts[0].price} </span><span className="color-second details_sale">{shirts[0].sale}</span></div>
                        <p>Status : <span className="text_status">{shirts[0].status}</span></p>
                        <hr className="w-25 m-0" />
                        <div className="w-75 mt-0-5-v">
                            <p className="text_desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero </p>
                        </div>
                        <div className="d-flex w-100">
                            <div className="d-flex w-25 justify-content-evenly">
                                <button>-</button>
                                <div><span>1</span></div>
                                <button>+</button>
                            </div>
                            <button className="w-75">ADD TO YOUR CART</button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Details;