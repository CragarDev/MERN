import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllProducts = () => {
  // create a state variable to store the products
  const [allProducts, setAllProducts] = useState([])
  // get all the products using a promise of axios .get .then and .catch

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/products')
      .then(res => {
        console.log('ALLPRODUCTS: Response', res.data.results)
        setAllProducts(res.data.results)
      })
      .catch(err => {
        console.log('ALLPRODUCTS: Error', err)
      })
  }, [])

  return (
    <>
      <div className='container'>
        <h2>All the products</h2>
        <div className='container d-flex gap-3 flex-wrap justify-content-center'>
          {allProducts.map(product => (
            <div key={product._id}>
              <div
                className='card mx-auto p-2'
                style={{ width: '18rem', listStyle: 'none' }}
              >
                <Link to={`/products/${product._id}`}>
                  <h2>{product.title}</h2>
                </Link>

                <h4>price: {product.price}</h4>
                <p>description: {product.description}</p>

                {/* <p>
                  <Link
                    to={`/products/update/${product._id}`}
                    className='btn btn-outline-warning btn-sm'
                  >
                    Update {product.title}
                  </Link>
                </p>
                <p>
                  <Link
                    to={`/products/delete/${product._id}`}
                    className='btn btn-outline-danger btn-sm'
                  >
                    Delete {product.title}
                  </Link>
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AllProducts
