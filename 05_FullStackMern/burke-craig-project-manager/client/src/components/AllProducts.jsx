import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllProducts = props => {
  // create a state variable to store the products
  const [allProducts, setAllProducts] = useState([])
  // get all the products using a promise of axios .get .then and .catch

  // toggle to reset the state after deleting a product
  const [deleteToggle, setDeleteToggle] = useState(false)

  // get the newProductToggle from the props
  // const newProductToggle = props.newProductToggle

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
  }, [deleteToggle, props.newProductToggle])

  // create a function to delete a product
  const deleteProductNoConfirm = _id => {
    console.log('DELETEPRODUCT NO CONFIRM: id', _id)
    axios
      .delete(`http://localhost:8000/api/products/delete/${_id}`)
      .then(res => {
        console.log('DELETEPRODUCT NO CONFIRM: Response', res.data)
        // set the toggle to the opposite of what it was to run the list call again
        setDeleteToggle(!deleteToggle)
      })
      .catch(err => {
        console.log('DELETEPRODUCT NO CONFIRM: Error', err)
      })
  }

  // number formatter for price
  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  // {priceFormatter.format(price)}

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

                <h4>
                  price:
                  <span className='ms-1 text-warning'>
                    {priceFormatter.format(product.price)}
                  </span>
                </h4>
                <p>description: {product.description}</p>

                {/* Update and delete buttons */}
                <p>
                  <Link
                    to={`/products/update/${product._id}`}
                    className='btn btn-outline-info btn-sm'
                  >
                    Update {product.title}
                  </Link>
                </p>
                {/* this delete would take me to a confirm delete page */}
                {/* <p>
                  <Link
                    to={`/products/delete/${product._id}`}
                    className='btn btn-outline-danger btn-sm'
                  >
                    Delete {product.title}
                  </Link>
                </p> */}
                <p>
                  <button
                    onClick={e => {
                      deleteProductNoConfirm(product._id)
                    }}
                    className='btn btn-outline-danger btn-sm'
                  >
                    Delete Product {product.title}
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AllProducts
