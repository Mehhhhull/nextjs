import React from 'react'
import Link from 'next/link'

import { products } from '../data.js'
const page = () => {

  const products=[
    
      {id: 1, title: "phones"},
      {id: 2, title: "Laptops"},
      {id: 3, title: "cameras"},
      {id: 4, title: "earbuds"},
      {id: 5, title: "tvs"},
  ]
  return (
    <div>

      <h1>here we are learning nested routes</h1>
      <h2>we offer followingproducts</h2>


      {products.map((product) => <ul key={product.id}>
      <li>
        <Link href={"/products"}>{product.title}</Link>
      </li>
      </ul>)}
    </div>
  )
}

export default page
