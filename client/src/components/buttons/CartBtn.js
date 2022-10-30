import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/ContextProvider'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';

function CartBtn() {

  const { account, setAccount } = useContext(LoginContext)
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const getDetailValidUser = async () => {
    try {
      const res = await fetch("/validUser", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      const data = await res.json()
      console.log(data)

      if (res.status !== 201) {
        console.log("error")
      } else {
        setAccount(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  //User Logout ----------------------------------------
  const logoutUser = async () => {
    try {
      const res2 = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      const data2 = await res2.json()
      console.log(data2)

      if (res2.status !== 201) {
        console.log("error")
      } else {
        alert("User Logged Out!!!")
        navigate("/")
        setAccount(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  //-----------------------------------------------

  useEffect(() => {
    getDetailValidUser()
  }, [])

  const handleMenuClick = () => {
    handleClose(); 
    logoutUser()
  }

  return (
    <div className="rightNavPart">
      {
        account ? <NavLink to='/cart' className='btn btn-outline-success ms-2'>
          <span className='fa fa-shopping-cart me-1'></span> cart({account?.carts?.length})
        </NavLink> : <button
          type="button"
          className="btn btn-outline-success ms-auto"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          <span className='fa fa-shopping-cart me-1'></span> cart(0)
        </button>
      }
      {
        account ? <Avatar className='avtar2'
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >{account?.name[0]?.toUpperCase()}</Avatar> :
          <Avatar className='avtar'
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          />
      }
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        {
          account ? <MenuItem onClick={handleMenuClick}><LogoutIcon style={{fontSize:16, marginRight:3}}/>Logout</MenuItem> : ""
        }
      </Menu>
    </div>
  )
}

export default CartBtn