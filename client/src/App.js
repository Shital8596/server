import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AllProducts from './components/AllProducts';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';



function App() {

  const [data, setData] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    },2000)
  },[])
  return (
    <>
    {
      data ? (
        <>
        <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/product' element={<AllProducts/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        {/* <Navigate to='/' /> */}
      </Routes>
      <Footer/>
        </>
      ): (
        <div className='circle'>
          <CircularProgress style={{color:"lightgreen"}}/>
          <h3>Loading...</h3>
        </div>
      )
    }
    
    </>
  );
}

export default App;
