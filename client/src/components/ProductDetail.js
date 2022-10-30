import React, { useState, useEffect, useContext } from 'react'
import {useParams} from 'react-router'
import DATA from '../Data'
import {useDispatch} from 'react-redux'
import { addItem, delItem } from '../redux/actions/index'
import Reviews from './Reviews'
import {LoginContext} from './context/ContextProvider'


function ProductDetail() {

    const [inddata, setInddata] = useState([])
    // console.log(inddata)

    const [cartBtn, setCartBtn] = useState("Add to cart")

    const {account, setAccount} = useContext(LoginContext)


    //using backend ---------------------------------------------------
    
    const {id} = useParams()

    const getindata = async () => {
        const res = await fetch(`/getproductsone/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json()
        console.log(data)

        if(res.status !== 201){
            console.log("No data found")
        }else{
            setInddata(data)
        }
        // console.log(data)
        
    }

    useEffect(() => {
        getindata()
    },[id])


    //Add to cart function backend
    
    const handleAddToCartApi = async (id) =>{
        
        const checkRes = await fetch(`/addcart/${id}`, {
            method:"POST",
            headers:{
                'Accept' : 'application/json',
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                inddata
            }),
            credentials:"include"
        })

        const data1 = await checkRes.json()

        setAccount(data1)
        console.log(data1)

        if(checkRes.status == 401 || !data1){
            console.log("user invalid")
            alert("user invalid")
        }else{
            alert("data added to cart")
        }
    }

    //=======================================

  return (
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-md-6 d-flex justify-content-center mx-auto product'>
                    <img src={inddata?.detailUrl} alt={inddata?.title} height="400px"/>
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                    <h3 className='display-9 fw-300'>{inddata?.title}</h3>
                    <hr/>
                    <h2 className='my-4'><span className='fa fa-rupee me-1'></span> {inddata?.price}</h2>
                    <p className='lead'>{inddata?.description}</p>
                    <button onClick={() => handleAddToCartApi(inddata.id)} className='btn btn-outline-primary my-5'>{cartBtn}</button>
                </div>
            </div>
            <Reviews/>
        </div>
  )
}

export default ProductDetail