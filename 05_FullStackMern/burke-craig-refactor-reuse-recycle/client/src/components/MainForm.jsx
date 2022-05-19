import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MainForm = props => {
  const {
    initialTitle,
    initialPrice,
    intitialDescription,
    onSubmitProp,
    initialErrors
  } = props
  const [title, setTitle] = useState(initialTitle)
  const [price, setPrice] = useState(initialPrice)
  const [description, setDescription] = useState(intitialDescription)
  const [product, setProduct] = useState({})
  const [errors, setErrors] = useState({ initialErrors })
  const onSubmitHandler = e => {
    console.log('submit button clicked')
    e.preventDefault()
    console.log('title', title)
    console.log('price', price)
    console.log('description', description)
    setProduct({ title, price, description })
    console.log('product on form', product)
    onSubmitProp(product)
  }

  return (
    <>
      <div>
        <h1>
          Update Product: <span className='text-info'>{title}</span>
        </h1>
        <div className='container'>
          <form className='text-start' onSubmit={onSubmitHandler}>
            <div className='mb-3 text-start'>
              {/* title form input */}
              <label htmlFor='title' className='form-label'>
                Enter Product Title
              </label>
              <input
                onChange={e => {
                  setTitle(e.target.value)
                }}
                type='text'
                name='title'
                className='form-control'
                id='title'
                value={title}
                placeholder='enter product name'
              />
              <p className='text-danger'>{errors.title?.message} </p>
              {/* price form input */}
              <label htmlFor='price' className='form-label'>
                Enter Product Price
              </label>
              <input
                onChange={e => {
                  setPrice(e.target.value)
                }}
                type='currency'
                name='price'
                className='form-control'
                id='price'
                value={price}
                placeholder='enter product price'
              />
              <p className='text-danger'>{errors.price?.message} </p>
              {/* description form input */}
              <label htmlFor='description' className='form-label'>
                Enter Product Price
              </label>
              <input
                onChange={e => {
                  setDescription(e.target.value)
                }}
                type='currency'
                name='description'
                className='form-control'
                id='description'
                value={description}
                placeholder='enter product description'
              />
              <p className='text-danger'>{errors.description?.message} </p>
              <input
                value={`Create new: ${title} `}
                className='btn btn-success'
                type='submit'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default MainForm
