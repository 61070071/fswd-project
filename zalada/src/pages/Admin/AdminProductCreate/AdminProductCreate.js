import React, { useState } from "react";
import "./AdminProductCreate.css"
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import NamePageAdmin from "../../../components/NamePageAdmin/NamePageAdmin";
import Plus from "../../../images/plus-green.svg";
import UploadPicture from "../../../images/upload-picture.svg";
import Photo from "../../../images/add-a-photo.svg";
import Close from "../../../images/icon-close.svg";
function AdminProductCreate() {
    const [popUp, setPopUp] = useState(false);

    function togglePopUp() {
        setPopUp(!popUp)
    }
    return (
        <div className="d-flex flex-wrap">

            <div className="w-15">
                <AdminNavBar />
            </div>
            <div className="w-85 d-flex flex-wrap align-items-start">
                <NamePageAdmin />
                { popUp === true &&
                <div className="bg-pop-up w-85 h-100 position-fixed d-flex justify-content-center align-items-center z-index-2">
                    <div className="w-25 bg-white">
                        <div className="w-90 mx-auto d-flex justify-content-center line-bottom-gray position-relative">
                            <span className="py-1-v">CATEGORIES</span>
                            <img alt="" src={Close} className="position-absolute image-close" onClick={togglePopUp}/>
                        </div>
                        <div className="w-90 mx-auto d-flex flex-wrap">
                            <div className="w-100 py-0-5-v">
                                <input type="radio" className="w-10" />
                                <span className="" name="radio-categories">CLOTH</span>
                            </div>
                            <div className="w-100 py-0-5-v">
                                <input type="radio" className="w-10" />
                                <span className="" name="radio-categories">EQUIPMENT</span>
                            </div>
                            <div className="w-100 py-0-5-v">
                                <input type="radio" className="w-10" />
                                <span className="" name="radio-categories">SHOES</span>
                            </div>
                            <div className="w-100 py-0-5-v">
                                <input type="radio" className="w-10" />
                                <span className="" name="radio-categories">BAG</span>
                            </div>
                            <div className="w-100 py-0-5-v">
                                <input type="radio" className="w-10" />
                                <span className="" name="radio-categories">ELECTRONIC</span>
                            </div>
                        </div>
                        <div className="w-90 mx-auto d-flex justify-content-center py-1-v">
                            <button className="bg-second color-white w-95 border-0 rounded btn-pop-up font-weight-bold" onClick={togglePopUp}>ADD CATEGORIES</button>
                        </div>
                    </div>
                </div>
            }
                <div className="w-100 h-90 bg-main d-flex py-1-5-v">
                    <div className="w-95 mx-auto bg-white">
                        <div className="w-95 mx-auto line-bottom-gray">
                            <div className="w-30 py-0-5-v mt-1-v d-flex align-items-center">
                                <span className="color-second mr-1-v">ADD PRODUCTS</span>
                                <img alt="" src={Plus} className="image-plus-product-create" />
                            </div>
                        </div>
                        <div className="w-95 d-flex mx-auto">
                            <div className="w-50 d-flex flex-column line-right-gray mt-0-5-v">
                                <div className="w-100 d-flex flex-column color-no-5">
                                    <span className="py-0-5-v">PRODUCT NAME</span>
                                    <input className="w-70 bg-third rounded bd-1-gray" />
                                </div>
                                <div className="w-100 d-flex flex-column mt-0-5-v color-no-5">
                                    <span className="py-0-5-v">QUANTITY</span>
                                    <input className="w-70 bg-third rounded bd-1-gray" />
                                </div>
                                <div className="w-100 d-flex flex-column mt-0-5-v color-no-5">
                                    <span className="py-0-5-v">PRICE</span>
                                    <input className="w-70 bg-third rounded bd-1-gray" />
                                </div>
                                <div className="w-100 d-flex flex-column mt-1-v color-no-5">
                                    <span className="py-0-5-v">CATEGORY</span>
                                    <button className="w-35 btn-add-categories" onClick={togglePopUp}>ADD CATEGORIES +</button>
                                </div>
                                <div className="w-100 d-flex flex-column mt-1-v color-no-5">
                                    <span className="py-0-5-v">DESCRITION</span>
                                    <textarea className="w-70 bg-third rounded bd-1-gray" rows="4" cols="50" name="" form=""></textarea>
                                </div>
                                <button className="w-70 mt-2-v bg-second color-white rounded border-0 py-0-5-v font-weight-bold">ADD PRODUCT</button>
                            </div>

                            <div className="w-50 d-flex flex-wrap">
                                <div className="w-90 mx-auto d-flex justify-content-center flex-column align-items-center py-1-v line-bottom-gray">
                                    <span>PRODUCT PREVIEW PICTURE</span>
                                    <img className="mt-1-v" alt="" src={UploadPicture} />
                                    <div className="d-flex w-30 justify-content-around position-relative btn-upload-pic mt-1-v">
                                        <span >UPLOAD PICTURE</span>
                                        <img alt="" src={Photo} />
                                        <input type="file" className="position-absolute w-100 h-100 op-0" />
                                    </div>
                                </div>

                                <div className="w-90 mx-auto d-flex justify-content-center flex-column align-items-center py-1-v">
                                    <span>UPLOAD SIDE PICTURE (Maximum 4)</span>
                                    <img className="mt-1-v image-upload-bottom" alt="" src={UploadPicture} />
                                    <div className="d-flex w-30 justify-content-around position-relative btn-upload-pic mt-1-v">
                                        <span >UPLOAD PICTURE</span>
                                        <img alt="" src={Photo} />
                                        <input type="file" className="position-absolute w-100 h-100 op-0" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminProductCreate;