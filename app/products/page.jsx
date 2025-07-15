import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>

      <h1>here we are learning nested routes</h1>
      <h2>we offer followingproducts</h2>
      <ul>
        <li><Link href={"/products/phones"}>Phones</Link></li>
        {/* <li><Link>Phones</Link></li>
        <li><Link>Phones</Link></li> */}
      </ul>
    </div>
  )
}

export default page
