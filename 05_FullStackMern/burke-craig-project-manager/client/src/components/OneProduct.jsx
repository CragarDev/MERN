import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import DateFormat from './DateFormat'
import TimeFormat from './TimeFormat'

const OneProduct = () => {
  const { _id } = useParams()
  const [oneProduct, setOneProduct] = useState({})

  // set up the history object to use the push method
  const history = useHistory()

  // set up a delete toggle to reset the state after deleting a product
  const [deleteToggle, setDeleteToggle] = useState(false)

  const { title, price, description, createdAt, updatedAt } = oneProduct

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${_id}`)
      .then(res => {
        console.log('ONEPRODUCT: Response', res.data.results)
        setOneProduct(res.data.results)
      })
      .catch(err => {
        console.log('ONEPRODUCT: Error', err)
      })
  }, [_id])

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
    history.push('/products')
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
      <div>
        <h5>
          <span className='text-warning h1'>{title}</span>
        </h5>
        <h5>
          Price:{' '}
          <span className='text-info h3'>{priceFormatter.format(price)}</span>
        </h5>
        <p>
          Description: <span className='text-info h3'>{description}</span>
        </p>

        <div className='container d-flex gap-2 w-50 justify-content-around'>
          <div className='container border border-2 border-secondary'>
            <h4>Created</h4>
            <h6 className='text-secondary'>
              <DateFormat date={createdAt} />
            </h6>
            <h6 className='text-secondary'>
              <TimeFormat time={createdAt} />
            </h6>
          </div>
          <div className='container border border-2 border-secondary'>
            <h4>Updated</h4>
            <h6 className='text-secondary'>
              <DateFormat date={updatedAt} />
            </h6>
            <h6 className='text-secondary'>
              <TimeFormat time={updatedAt} />
            </h6>
          </div>
        </div>
        <h6 className='text-secondary mt-3'>ID: {_id}</h6>
        <p>
          <Link
            to={`/products/update/${_id}`}
            className='btn btn-outline-warning btn-sm m-3'
          >
            Update {title}
          </Link>
          {/* this delete button would take me to a confirm delete page */}
          {/* <Link
            to={`/ninjas/delete/${_id}`}
            className='btn btn-outline-danger btn-sm m-3'
          >
            Delete {title}
          </Link> */}

          <button
            onClick={e => {
              deleteProductNoConfirm(_id)
            }}
            className='btn btn-outline-danger btn-sm'
          >
            Delete Product {title}
          </button>
        </p>
      </div>
    </>
  )
}

export default OneProduct
