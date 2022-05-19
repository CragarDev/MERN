import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProductForm = ({
  props,
  titleColorStyle,
  buttonText,
  buttonColorStyle,
  formTitle,
  submissionMethod
}) => {
  // create the state variables
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  // const [titleColorStyle, setTitleColorStyle] = useState('')

  // create state variables for the form inputs
  const [productInfo, setProductInfo] = useState({})

  // set error state variable
  const [errors, setErrors] = useState({})

  // get the id from the url using the useParams hook to use for the update
  const { _id } = useParams()

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
    if (submissionMethod === 'post') {
      console.log('posting product')
      axios
        .post(`http://Localhost:8000/api/products/new`, product)
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
            history.push('/products')
          }
        })
        .catch(err => {
          console.log('PRODUCT FORM: Error:', err)
        })
      console.log('PRODUCT FORM: Submitted')
    } else if (submissionMethod === 'put') {
      console.log('putting product')
      axios
        .put(`http://localhost:8000/api/products/${_id}`, productInfo)
        .then(res => {
          console.log(
            'UPDATE PRODUCT: Response after updating the product',
            res
          )
          if (res.data.error) {
            console.log('PRODUCT UPDATE FORM: Error:', res.data.error)
            setErrors(res.data.error.errors)
          } else {
            setProductInfo(product)
            setErrors({})
            setProductInfo({})
            history.push(`/products`) // this will take us to the products list
          }
        })
        .catch(err => {
          console.log('UPDATE PRODUCT: Error after updating the product', err)
        })
    }
  }

  return (
    <>
      <div>
        <h1>
          {/* Form Title */}
          {formTitle} <span className={`text-${titleColorStyle}`}>{title}</span>
        </h1>
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
              type='currency'
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

          <button type='submit' className={`btn btn-${buttonColorStyle}`}>
            {/* Submit Product */}
            {buttonText}
          </button>
        </form>
      </div>
    </>
  )
}

// default props
ProductForm.defaultProps = {
  titleColorStyle: 'danger',
  buttonText: 'Submit',
  buttonColorStyle: 'success',
  formTitle: 'Product Form Title:',
  submissionMethod: 'post'
}

// prop types
ProductForm.propTypes = {
  titleColorStyle: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  buttonColorStyle: PropTypes.string,
  formTitle: PropTypes.string.isRequired,
  submissionMethod: PropTypes.string.isRequired
}

export default ProductForm
