import React from 'react'
import { NavLink } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


function Product({products:DATA}) {

  const navigate = useNavigate()
  const cardItem = (item) => {
    return (
      <div key={item.id} className='card my-5 py-4' style={{width:'18rem'}} onClick={() => navigate(`/product/${item.id}`)}>
        <img className='card-img-top' src={item.url} alt={item.title}/>
        <div className='card-body text-center'>
          <h5 className='card-title'>{item.title}</h5>
          <p className='lead'><span className='fa fa-rupee me-1'></span> {item.price}</p>
          <NavLink to={`/product/${item.id}`} className='btn btn-outline-primary'>BUY NOW</NavLink>
        </div>
      </div>
    )
  }
  return (
    <div className='productDiv'>
      <div className='container py-4'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1 className='productTitle'>Products</h1>
            <hr/>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-around'>
          {DATA?.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Product