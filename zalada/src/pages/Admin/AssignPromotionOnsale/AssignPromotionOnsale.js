import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { useMutation } from '@apollo/client'

import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import plus from "../../../images/add-circle.svg";
import { CREATE_PRODUCT_SALE_MUTATION } from '../../../graphql/createProductMutation';
import { isNumeric } from '../../../util/isNumeric'
import { useLazyQuery } from '@apollo/client'
import { PRODUCT_QUERY_ID } from '../../../graphql/productsOGQuery';



function AssignPromotionOnsale() {
    const { productId } = useParams();
    const [countAdd, setCountAdd] = useState(0);
    const handleClick = () => setCountAdd(countAdd + 1);
    const [product, setProduct] = useState({});
    const [getProduct, { loading, error }] = useLazyQuery(PRODUCT_QUERY_ID, {
        variables: { productId },
        onCompleted: data => {
            // console.log(data);
            // setProduct(data?.productById)
            setProduct({
                catagory: data?.productById.catagory,
                isActive: true,
                photourl: data?.productById.photourl,
                price: data?.productById.price,
                productdescription: data?.productById.productdescription,
                productname: data?.productById.productname,
                quantity: data?.productById.quantity,
                discount: data?.productById.discount
            })
        }
    })
    const data = product
    useEffect(() => {
        getProduct()

    }, [getProduct])
    const history = useHistory()
    const [newProduct, setNewProduct] = useState({


    })
    const [createProduct] = useMutation(CREATE_PRODUCT_SALE_MUTATION)
    const handleInputChange = useCallback(
        (e) => {

            let { name, value } = e.target
            if (isNumeric(value)) value = Number(value)
            setProduct((prev) => ({ ...prev, [name]: value }))
        },
        [],
    )
    const handleCreateProduct = useCallback(
        async (e) => {
            e.preventDefault()
            try {
                await createProduct({ variables: { record: product } })
                history.push('/admin/promotions')
                alert('Promotion Added')
            } catch (err) {
                console.log(err)
                alert('Promotion Added failed')
                console.log(product);

            }
        },
        [createProduct, history, product],
    )
    return (

        <div className="d-flex flex-wrap">

            <div className="w-15">
                <AdminNavBar page={2} />
            </div>
            <div className="w-85 d-flex flex-wrap align-items-start">
                <div className="w-100 h-90 bg-main d-flex py-1-5-v">
                    <div className="w-95 mx-auto bg-white">
                        <div className="w-95 mx-auto line-bottom-gray">
                            <div className="w-30 py-0-5-v mt-1-v d-flex align-items-center">
                                <span className="color-second mr-1-v">ADD PROMOTION</span>
                                <img alt="" src={plus} />
                            </div>
                        </div>

                        {/* form อยู่นี้ */}
                        <form onSubmit={handleCreateProduct}>
                            <div className="w-95 d-flex mx-auto">
                                <div className="w-50 d-flex flex-column mt-0-5-v">
                                    {/* <div className="w-100 d-flex flex-column color-no-5">
                                        <span className="py-0-5-v">PRODUCT ID</span>
                                        <input onChange={handleInputChange} value={data._id} name="productId" className="w-70 bg-third rounded bd-1-gray" />
                                    </div> */}
                                    <div className="w-100 d-flex flex-column mt-0-5-v color-no-5">
                                        <span className="py-0-5-v">PRODUCT NAME</span>
                                        <input onChange={handleInputChange} value={product.productname} type="productname" name="productname" className="w-70 bg-third rounded bd-1-gray" />


                                    </div>
                                    <div className="w-100 d-flex flex-column mt-0-5-v color-no-5">
                                        <span className="py-0-5-v">QUANTITY</span>
                                        <input onChange={handleInputChange} value={product.quantity} type="number" name="quantity" className="w-70 bg-third rounded bd-1-gray" />
                                    </div>
                                    <div className="w-100 d-flex flex-column mt-1-v color-no-5">
                                        <span className="py-0-5-v">PRICE</span>
                                        <input onChange={handleInputChange} value={product.price} type="number" name="price" className="w-70 bg-third rounded bd-1-gray" />
                                    </div>
                                    <div className="w-100 d-flex flex-column mt-1-v color-no-5">
                                        <span className="py-0-5-v">DISCOUNT (%)</span>
                                        <input onChange={handleInputChange} value={product.discount} type="number" name="discount" className="w-35 bg-third rounded bd-1-gray" />
                                    </div>
                                    <div className="w-100 d-flex flex-column mt-1-v color-no-5">
                                        {/* <span className="py-0-5-v">TOTAL PRICE</span> */}
                                        {/* <input onChange={handleInputChange} value={product.total} type="number"  name="total" className="w-35 bg-third rounded bd-1-gray" /> */}
                                    </div>
                                    <button className="w-70 mt-2-v bg-second color-white rounded border-0 py-0-5-v font-weight-bold" type="submit">ADD PROMOTION</button>
                                </div>

                                <div className="w-50 d-flex flex-wrap">
                                    <div className="w-90 mx-auto d-flex justify-content-center flex-column align-items-center py-1-v">
                                        {/* <img alt="" src={data.photourl[0]} /> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AssignPromotionOnsale;