import React from 'react'
import { products } from '../../data'
const page = ({ params: { slug } }) => {
  console.log("printing the slug=",slug)
  return (
    <div>
      <h1>Welcome to dynamic route</h1>
    </div>
  )
}

export default page
