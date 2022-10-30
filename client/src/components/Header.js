import React, { useState } from 'react'
// import Avatar from '@mui/material/Avatar';
import { Link, NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import SignUp from './buttons/SignUp'
import { useSelector } from 'react-redux'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Header() {

  const [text, setText] = useState("")
  const [liOpen, setLiOpen] = useState(true)
  const { products } = useSelector(state => state.getproductsdata)


  const getText = (items) => {
    setText(items)
    setLiOpen(false)
  }

  const handleNavClick = () => {
    setLiOpen(true);
  }

  return (
    <div className='outerNavDiv'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className='leftNav'>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navDiv collapse navbar-collapse" id="navbarSupportedContent">
              <div className='logoImg'>
                <img src="/assets/logo.jpg" alt="logo" />
              </div>
              <ul className="listDiv navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/product">
                    Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Login />
                </li>
                <li className="nav-item">
                  <SignUp />
                </li>
                <div className="searchBar">
                  <div className="nav-item">
                    <input type="text" name="product" value={text} id ="inputVal"
                      onChange={(e) => getText(e.target.value)}
                      placeholder="Search Your Products" />
                  </div>
                  <div className="search_icon">
                    <i className="fa fa-search" id="search"></i>
                  </div>

                  {/* search List */}
                  {
                    text &&
                    <List className="extraSearch" hidden={liOpen} >
                      {
                        products.filter(product => product.title.toLowerCase().includes(text.toLowerCase())).map(product => (
                          <ListItem >
                            <NavLink to={`/product/${product.id}`} onClick={handleNavClick}>
                              {product.title}
                            </NavLink>
                          </ListItem>
                        ))
                      }
                    </List>
                  }
                </div>
              </ul>
            </div>
          </div>
          <div className='rightNav'>
            <div className="searchBar">
              <div className="search-item">
                <input type="text" name="product"
                  onChange={(e) => getText(e.target.value)}
                  placeholder="Search Your Products" />
              </div>
              <div className="search_icon">
                <i className="fa fa-search" id="search"></i>
              </div>

              {/* search List */}
              {
                text ?
                <List className="extraSearch" hidden={liOpen}>
                  {
                    products.filter(product => product.title.toLowerCase().includes(text.toLowerCase())).map(product => (
                      <ListItem>
                        <NavLink to={`/product/${product.id}`} onClick={handleNavClick}>
                          {product.title}
                        </NavLink>
                      </ListItem>
                    ))
                  }
                </List> : ""
              }
            </div>
            <div className='logoImg'>
              <img src="/assets/logo.jpg" alt="logo" />
            </div>
            <Link className="navbar-brand" to="/">
              HerbalStore
            </Link>
            <CartBtn />
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header