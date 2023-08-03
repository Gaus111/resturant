import React from 'react'
import  "../Styles/HomeStyles.css"
import Layout from '../Components/Layout/Layout'
import {Link} from "react-router-dom"
import banner from "../img/banner.jpeg"

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{background:`url(${banner})`}} >
<div className="header_container">
<h1>Food Resturant </h1>
<p>Best food in india</p>
<Link to="/menu" >
<button>ORDER NOW</button>
</Link>
</div>
      </div>
    </Layout>
  )
}

export default Home