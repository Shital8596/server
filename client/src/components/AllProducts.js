import React, { useEffect } from 'react'
import {getProducts} from "../redux/actions"
import {useDispatch, useSelector} from "react-redux"
import Product from './Product'

function AllProducts() {

    const {products} = useSelector(state => state?.getproductsdata) 
    console.log(products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
  return (
    <div>
        <Product products={products} />
    </div>
  )
}

export default AllProducts