import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { CartContext } from "./Context";
import { LoginContext } from './context/ContextProvider'
import CircularProgress from '@mui/material/CircularProgress';
import {Box} from "@mui/system"


function Cart(props) {

    const [loading, setLoading] = useState(true)
    const [cartData, setCartData] = useState([])
    const { account, setAccount } = useContext(LoginContext)
    // console.log(cartData)

    const handleClose = async (id) => {
        try {
            const result = await fetch(`/remove/${id}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const cData = await result.json()
            console.log(cData)

            if (result.status == 400 || !cData) {
                console.log("error")
            } else {
                console.log("user delete")
                setAccount(cData)
                getCartData()
            }
        } catch (error) {
            console.log(error)
        }

    }

    const getCartData =  () => {
         fetch("/cartDetails", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        .then((res)=>res.json())
        .then(data => setCartData(data?.carts))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }

    useEffect(() => {
        setTimeout(getCartData,1000)
    }, [])


    if(loading){
        return(
            <Box  className='circle'>
                <CircularProgress style={{ color: " #49dc92" }}/>
            </Box>
        )
    }

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 " key={cartItem?.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem?.id)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem?.detailUrl} alt={cartItem?.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4" style={{ "marginTop": "40px" }}>
                            <h5>{cartItem?.title}</h5>
                            <p className="lead fw-bold"><span className='fa fa-rupee me-1'></span> {cartItem?.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    const button = () => {
        return (
            <CartContext.Provider value={cartData}>
                <div className="container">
                    <div className="row">
                        <NavLink to='/checkout' className="btn btn-outline-primary mb-5 w-25 mx-auto"> Proceed To checkout</NavLink>
                    </div>
                </div>
            </CartContext.Provider>
        )
    }
    return (
        <>
            {
                (cartData?.length) === 0 && emptyCart()
            }

            {
                cartData?.length !== 0 && cartData?.map(cartItems)
            }
            {
                cartData?.length !== 0 && button()
            }
        </>
    )
}

export default Cart