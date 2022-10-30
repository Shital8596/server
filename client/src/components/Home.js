import React from 'react'
import AllProducts from './AllProducts'


function Home() {
  return (
    <div className='outerDiv'>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "647px" }}>
          <div className="carousel-item  active" style={{ marginTop: "30px" }} >
            <img src="/assets/images/carouselimage/img1.jpg" className="d-block w-100" alt="img1" />
          </div>
          <div className="carousel-item" style={{ marginTop: "30px" }} >
            <img src="/assets/images/carouselimage/img2.png" className="d-block w-100" alt="img2" />
          </div>
          <div className="carousel-item" style={{ marginTop: "30px" }} >
            <img src="/assets/images/carouselimage/img3.avif" className="d-block w-100" alt="img3" />
          </div>
          <div className="carousel-item" style={{ marginTop: "30px" }} >
            <img src="/assets/images/carouselimage/img4.jpg" className="d-block w-100" alt="img4" />
          </div>
          <div className="carousel-item" style={{ marginTop: "30px" }} >
            <img src="/assets/images/carouselimage/img5.avif" className="d-block w-100" alt="img5" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          style={{ display: "flex", justifyContent: "center", alignItem: "center" }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div style={{ "marginTop": "-130px" }}>
        <AllProducts />
      </div>
    </div>
  )
}

export default Home