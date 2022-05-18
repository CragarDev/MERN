import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import DateFormat from './DateFormat'
import TimeFormat from './TimeFormat'

const OneProduct = () => {
  const { _id } = useParams()
  const [oneProduct, setOneProduct] = useState({})

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

  return (
    <>
      <div>
        <h5>
          <span className='text-warning h1'>{title}</span>
        </h5>
        <h5>
          Price: <span className='text-info h3'>{price}</span>
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
        {/* <p>
          <Link
            to={`/ninjas/update/${_id}`}
            className='btn btn-outline-warning btn-sm m-3'
          >
            Update {title}
          </Link>
          <Link
            to={`/ninjas/delete/${_id}`}
            className='btn btn-outline-danger btn-sm m-3'
          >
            Delete {title}
          </Link>
        </p> */}
      </div>
    </>
  )
}

export default OneProduct
