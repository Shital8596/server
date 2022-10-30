import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='outerDiv'>
      <div className="container footer ">
        <footer className="row row-cols-1 row-cols-sm-5 row-cols-md-5 py-5 my-5 border-top ">
          <div className="col mb-3">
            <Link
              to="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <svg className="bi me-2" width={40} height={32}>
                <use xlinkHref="#bootstrap" />
              </svg>
            </Link>
          </div>
          <div className="col mb-3"></div>
          <div className="col mb-3">
            <h5 className='sectionDiv'>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className='sectionDiv'>Products</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  Beauty
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  Hair
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  Skin
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  Baby
                </Link>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className='sectionDiv'>Store</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  India
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  USA
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  Nepal
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  Londan
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 d-flex align-items-center">
              <Link
                to="/"
                className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              >
              <span className='fa fa-back'></span>
              </Link>
              <span className="mb-3 mb-md-0 text-muted">© 2022 mamaearth, Inc</span>
            </div>
            <ul className="nav col-md-4 justify-content-center list-unstyled d-flex ">
              <li className="ms-3">
                <Link className="text-muted" to="#">
                  <span className='fa fa-twitter'/>
                </Link>
              </li>
              <li className="ms-3">
                <Link className="text-muted" to="#">
                <span className='fa fa-instagram'/>
                </Link>
              </li>
              <li className="ms-3">
                <Link className="text-muted" to="#">
                <span className='fa fa-facebook'/>
                </Link>
              </li>
            </ul>
        </footer>
      </div>

    </div>
  )
}

export default Footer