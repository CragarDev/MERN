import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

const UpdateProduct = props => {
  // get the id from the url using the useParams hook
  const { _id } = useParams()
  // create state variables for the form inputs
  const [productInfo, setProductInfo] = useState({})
  // console.log('UpdateNinjaForm: ninjaInfo', ninjaInfo)

  // initialize the history hook so we can redirect the user
  const history = useHistory()

  // deconstruct the ninjaInfo object
  const { title, price, description } = productInfo

  // set error state variable
  const [errors, setErrors] = useState({})

  // format the gradDate using the DateFormat component
  // const gradDateFormatted = <DateFormat date={gradDate} />
  // console.log('gradDate', gradDate)
  // const gradDateFormatted = Moment(gradDate)
  //   // .add(6, 'hours')
  //   .format('yyyy-MM-DD')

  // console.log('gradDateFormatted', gradDateFormatted)
  // console.log('gradDateFormatted', typeof gradDateFormatted)

  // const [name, setName] = useState('')
  // const [numProjects, setNumProjects] = useState('')
  // const [gradDate, setGradDate] = useState('')
  // const [isVeteran, setIsVeteran] = useState(false)
  // // create state variable for errors
  // const [errors, setErrors] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${_id}`)
      .then(res => {
        // console.log(
        //   'UPDATE PRODUCT: Response from getting the product at that id',
        //   res.data.results
        // )
        setProductInfo(res.data.results)
      })
      .catch(err => {
        console.log('UPDATE PRODUCT: Error getting the product at that id', err)
      })
  }, [_id])

  const changeHandler = e => {
    setProductInfo({
      ...productInfo,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = e => {
    e.preventDefault()
    // console.log('productInfo', productInfo)

    const product = {
      title,
      price,
      description
    }
    axios
      .put(`http://localhost:8000/api/products/${_id}`, productInfo)
      .then(res => {
        console.log('UPDATE PRODUCT: Response after updating the product', res)
        if (res.data.error) {
          console.log('PRODUCT UPDATE FORM: Error:', res.data.error)
          setErrors(res.data.error.errors)
        } else {
          setProductInfo(product)
          // setTitle('')
          // setPrice('')
          // setDescription('')
          setErrors({})
          setProductInfo({})
          // history.push(`/products/${_id}`) // this will take us to the products page
          history.push(`/products`) // this will take us to the products list
        }
      })
      .catch(err => {
        console.log('UPDATE PRODUCT: Error after updating the product', err)
      })
  }
  return (
    <>
      <div>
        <h1>
          Update Product: <span className='text-info'>{title}</span>
        </h1>
      </div>
      <div className='container'>
        {/* <form onSubmit={submitNinja} className='text-start'> */}
        <form className='text-start' onSubmit={submitHandler}>
          <div className='mb-3 text-start'>
            <label htmlFor='title' className='form-label'>
              Enter Product Title
            </label>
            <input
              // onChange={e => setName(e.target.value)}
              onChange={changeHandler}
              type='text'
              name='title'
              className='form-control'
              id='title'
              value={title}
              placeholder='enter product name'
            />
            <p className='text-danger'>{errors.name?.message} </p>
            {/* <p className="text-danger">{errors.name ? errors.name.message : null}</p> */}
          </div>
          <div className='mb-3  text-start'>
            <label htmlFor='numProjects' className='form-label'>
              Enter Price
            </label>
            <input
              // onChange={e => {
              //   setNumProjects(e.target.value)
              // }}
              onChange={changeHandler}
              value={price}
              type='currency'
              name='price'
              className='form-control'
              id='price'
              placeholder='price'
            />
            <p className='text-danger'>{errors.numProjects?.message} </p>
          </div>
          <div className='mb-3 text-start'>
            <label htmlFor='description' className='form-label'>
              Enter Description
            </label>
            <input
              // onChange={e => {
              //   setGradDate(e.target.value)
              // }}
              onChange={changeHandler}
              value={description}
              type='text'
              name='description'
              className='form-control'
              id='description'
              placeholder='description'
            />
            <p className='text-danger'>{errors.gradDate?.message} </p>
          </div>

          <button type='submit' className='btn btn-primary'>
            Update Product
          </button>
        </form>
      </div>
    </>
  )
}

export default UpdateProduct
