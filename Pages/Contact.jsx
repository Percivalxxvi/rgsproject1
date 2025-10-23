import React from 'react'
import { useNavigate } from 'react-router-dom'

const Shop = () => {
    const nav1=useNavigate()
  return (
    <div>Shop
        <button onClick={()=>nav1('/Shop')}>Go To Home</button>
    </div>
  )
}

export default Shop