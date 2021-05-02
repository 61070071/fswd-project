import React from "react";
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { useMutation } from '@apollo/client'
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import Plus from "../../../images/plus-green.svg";
import UploadPicture from "../../../images/upload-picture.svg";
import Photo from "../../../images/add-a-photo.svg";
import { CREATE_PRODUCTOG_MUTATION } from '../../../graphql/createProductMutation';
import {isNumeric} from '../../../util/isNumeric'
function AdminProductDetails() {
    const history = useHistory()
    const [newProduct, setNewProduct] = useState({

        photourl: ["https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.18169-9/11425240_488212167995217_6545955898177657852_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFOkveX07HXgUOAVziH7PmvIaFid6pEue0hoWJ3qkS57ZkU1dDs1w49EuO_g8TfdHsBLdlqPh5sYUlIE0V9bUVe&_nc_ohc=7gqNBHiWBX8AX-vVcTv&_nc_oc=AQkLVPdp2_zDbczx0uftFSiNwIoaHr9dDZcPQGEq0CQ00KQOUvfHao33qJPksxzUd6Y&_nc_ht=scontent.fbkk12-4.fna&oh=8f24a5dd90362be8a2fa64b76af64516&oe=60B4ED10"]

    })
    const [createProduct] = useMutation(CREATE_PRODUCTOG_MUTATION)
    const handleInputChange = useCallback(
        (e) => {
            
            let { name, value } = e.target
            if(isNumeric(value)) value = Number(value)
            setNewProduct((prev) => ({ ...prev, [name]: value }))
        },
        [],
    )
    const handleCreateProduct = useCallback(
        async (e) => {
            e.preventDefault()
            try {
                await createProduct({ variables: { record: newProduct } })
                history.push('/')
                alert('Product Added')
            } catch (err) {
                console.log(err)
                alert('Product Adding failed')
                console.log(newProduct);
            }
        },
        [createProduct, history, newProduct],
    )
    return (

        <div className="d-flex flex-wrap">

            <div className="w-15">
                <AdminNavBar page={2}/>
            </div>
            <div className="w-85 d-flex flex-wrap align-items-start">
                <div className="w-100 h-90 bg-main d-flex py-1-5-v">
                    <div className="w-95 mx-auto bg-white">
                        <div className="w-95 mx-auto line-bottom-gray">
                            <div className="w-30 py-0-5-v mt-1-v d-flex align-items-center">
                                <span className="color-second mr-1-v">ADD PRODUCTS</span>
                                <img alt="" src={Plus} className="image-plus-product-create" />
                            </div>
                        </div>
                        {/* form อยู่นี้ */}
                        <form onSubmit={handleCreateProduct}>
                            <div className="w-95 d-flex mx-auto">
                                <div className="w-50 d-flex flex-column line-right-gray mt-0-5-v">
                                    <div className="w-100 d-flex flex-column color-no-5">
                                        <span className="py-0-5-v">PRODUCT NAME</span>
                                        <input onChange={handleInputChange} value="text" name="productname" className="w-70 bg-third rounded bd-1-gray" />
                                    </div>
                                    <div className="w-100 d-flex flex-column mt-0-5-v color-no-5">
                                        <span className="py-0-5-v">QUANTITY</span>
                                        <input onChange={handleInputChange} value={newProduct.quantity} type="number" name="quantity" className="w-70 bg-third rounded bd-1-gray" />
                                        
                                        
                                    </div>
                                    <div className="w-100 d-flex flex-column mt-0-5-v color-no-5">
                                        <span className="py-0-5-v">PRICE</span>
                                        <input onChange={handleInputChange} value={newProduct.price} type="number"  name="price" className="w-70 bg-third rounded bd-1-gray" />
                                    </div>
                                    <div className="w-100 d-flex flex-column mt-1-v color-no-5">
                                        <span className="py-0-5-v">CATEGORY</span>
                                        <select className="w-35 btn-add-categories" value={newProduct.catagory} onChange={handleInputChange} name="catagory">
                                            <option className="d-none" value="" >ADD CATEGORIES</option>
                                            <option value="cloth">CLOTH</option>
                                            <option value="equipment">EQUIPMENT</option>
                                            <option value="shoes">SHOES</option>
                                            <option value="bag">BAG</option>
                                            <option value="electronic">ELECTRONIC</option>
                                        </select>
                                    </div>
                                    <div className="w-100 d-flex flex-column mt-1-v color-no-5">
                                        <span className="py-0-5-v">DESCRIPTION</span>
                                        <textarea onChange={handleInputChange} value={newProduct.productdescription}  name="productdescription" className="w-70 bg-third rounded bd-1-gray" rows="4" cols="50"></textarea>
                                    </div>
                                    <button className="w-70 mt-2-v bg-second color-white rounded border-0 py-0-5-v font-weight-bold" type="submit">ADD PRODUCT</button>
                                </div>

                                <div className="w-50 d-flex flex-wrap">
                                    <div className="w-90 mx-auto d-flex justify-content-center flex-column align-items-center py-1-v line-bottom-gray">
                                        <span>PRODUCT PREVIEW PICTURE</span>
                                        <img className="mt-1-v" alt="" src={UploadPicture} />
                                        <div className="d-flex w-30 justify-content-around position-relative btn-upload-pic mt-1-v">
                                            <span >UPLOAD PICTURE</span>
                                            <img alt="" src={Photo} />
                                            {/* <input onChange={handleInputChange} value={newProduct.photourl} name="photourl" type="file" className="position-absolute w-100 h-100 op-0"/> */}
                                            <input onChange={handleInputChange} value={newProduct.photourl}  name="photourl" className="w-70 bg-third rounded bd-1-gray" />
                                        </div>
                                    </div>

                                    {/* <div className="w-90 mx-auto d-flex justify-content-center flex-column align-items-center py-1-v">
                                        <span>UPLOAD SIDE PICTURE (Maximum 4)</span>
                                        <img className="mt-1-v image-upload-bottom" alt="" src={UploadPicture} />
                                        <div className="d-flex w-30 justify-content-around position-relative btn-upload-pic mt-1-v">
                                            <span >UPLOAD PICTURE</span>
                                            <img alt="" src={Photo} />
                                            <input  type="file" className="position-absolute w-100 h-100 op-0" />
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminProductDetails;