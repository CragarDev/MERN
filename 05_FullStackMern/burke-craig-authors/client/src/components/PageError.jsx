import React from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Button from './Button'

const PageError = () => {
  const { anythingelse } = useParams()
  //   const history = useHistory()

  return (
    <>
      <div className='App container'>
        <h1 className='text-danger text-center'>--- Error ----</h1>
        <h3>
          The page: <span className='text-danger'>{anythingelse}</span> that you
          are trying to access is not available!
        </h3>
        <h3>
          Please click a button below to add an author to the database or go to
          the home page
        </h3>
        <Link className='m-2' to='/new'>
          <Button color='blue' text='Create New Author' />
        </Link>
        <Link className='m-2' to='/'>
          <Button color='green' text='Home' />
        </Link>
      </div>
    </>
  )
}

export default PageError
