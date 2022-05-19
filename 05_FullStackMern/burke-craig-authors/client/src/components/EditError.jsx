import React, { useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Button from './Button'

const EditError = () => {
  const { _id } = useParams()
  const history = useHistory()

  useEffect(() => {
    history.push(`/editError/${_id}`)
  }, [_id])

  return (
    <>
      <div className='App container'>
        <h1 className='text-danger text-center'>--- Error ----</h1>
        <h3>
          The Author <span className='text-danger'>{_id}</span> you are trying
          to update is not in our database
        </h3>
        <h3>click on the button below to add them to the database?</h3>
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

export default EditError
