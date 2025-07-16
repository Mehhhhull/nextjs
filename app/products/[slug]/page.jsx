import React from 'react';
import { products } from '../../data';

const Page = ({ params: { slug } }) => {
  console.log("printing the slug=", slug);

  const newProducts = products.filter(
    (data) => data.category.toLowerCase() === slug.toLowerCase()
  );

  console.log("my new products=", newProducts);

  return (
    <div>
      <h1>Welcome to {slug}</h1>
      {newProducts.map((product) => (
        <ul key={product.title}>
          <li>Name: {product.title}</li>
          <li>Category: {product.category}</li>
          <li>Price: {product.price}</li>
          <li>User Rating: {product.userRating}</li>
        </ul>
      ))}
    </div>
  );
};

export default Page;
