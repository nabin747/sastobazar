import React from 'react'
import ProductList from '../components/ProductList'
import { toast } from 'react-toastify'

const HomePage = () => {
  toast("helllo")
  return (
    <div>
        <h1>Welcome to Our Ecommerce Store</h1>
        <button onClick={()=>toast("rereere")}>test</button>
        <ProductList/>
    </div>
  )
}

export default HomePage