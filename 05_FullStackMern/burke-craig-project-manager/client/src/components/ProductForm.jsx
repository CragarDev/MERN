import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const ProductForm = props => {
  // create the state variables
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  // set error state variable
  const [errors, setErrors] = useState({})

  // create history object
  const history = useHistory()

  // create the submit function
  const handleSubmit = e => {
    e.preventDefault()
    console.log(title, price, description)

    // create the product object
    const product = {
      title,
      price,
      description
    }

    // use axios to post the product
    axios
      .post('http://Localhost:8000/api/products/new', product)
      .then(res => {
        console.log('PRODUCT FORM: Response after posting the form', res)

        if (res.data.error) {
          console.log('PRODUCT FORM: Error:', res.data.error)
          setErrors(res.data.error.errors)
        } else {
          // clear the form
          setTitle('')
          setPrice('')
          setDescription('')
          setErrors({})
          props.setNewProductToggle(!props.newProductToggle)
        }
      })
      .catch(err => {
        console.log('PRODUCT FORM: Error:', err)
      })
    console.log('PRODUCT FORM: Submitted')
  }

  return (
    <>
      <div>
        <h1>Product Form</h1>
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit} className='text-start'>
          <div className='mb-3 text-start'>
            <label htmlFor='title' className='form-label'>
              Product Title:
            </label>
            <input
              onChange={e => setTitle(e.target.value)}
              type='text'
              className='form-control'
              id='title'
              value={title}
              placeholder='enter product title'
            />
            <p className='text-danger'>{errors.title?.message} </p>
          </div>
          <div className='mb-3  text-start'>
            <label htmlFor='price' className='form-label'>
              Product Price:
            </label>
            <input
              onChange={e => {
                setPrice(e.target.value)
              }}
              value={price}
              type='number'
              className='form-control'
              id='price'
              placeholder='price of product'
            />
            <p className='text-danger'>{errors.price?.message} </p>
          </div>
          <div className='mb-3 text-start'>
            <label htmlFor='description' className='form-label'>
              Product Description
            </label>
            <input
              onChange={e => {
                setDescription(e.target.value)
              }}
              value={description}
              type='text'
              className='form-control'
              id='description'
              placeholder='description of product'
            />
            <p className='text-danger'>{errors.description?.message} </p>
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit Product
          </button>
        </form>
      </div>
    </>
  )
}

export default ProductForm
