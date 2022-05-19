import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom'
import Button from './Button'
import axios from 'axios'
// import AuthorForm from './AuthorForm'

const NewAuthor = props => {
  // create the variables
  // const [author, setAuthor] = useState('')
  const { _id } = useParams()
  // console.log('author', author)
  const [authorInfo, setAuthorInfo] = useState({})
  const history = useHistory()
  const { author } = authorInfo
  const [errors, setErrors] = useState({})
  // console.log('authorInfo', authorInfo)

  // deconstruct the authorInfo

  // bring in the author from the database
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${_id}`)
      .then(res => {
        console.log(
          'AUTHOR FORM: Response after getting author at that id: ',
          res
        )
        setAuthorInfo(res.data.results)
      })
      .catch(err => {
        console.log('AUTHOR FORM: Error getting the author at that id: ', err)
        if ((err.name = 'CastError')) {
          history.push(`/editError/${_id}`)
        }
      })
  }, [_id])

  //  set up the change handler
  const changeHandler = e => {
    setAuthorInfo({ ...authorInfo, [e.target.name]: e.target.value })
  }

  // set up the submit function
  const submitHandler = e => {
    e.preventDefault()
    console.log('authorInfo', authorInfo)
    axios
      .put(`http://localhost:8000/api/authors/${_id}`, authorInfo)
      .then(res => {
        console.log(
          'AUTHOR FORM: Response after updating and posting updated author: ',
          res
        )

        if (res.data.error) {
          console.log('AUTHOR FORM: Error: ', res.data.error)
          setErrors(res.data.error.errors)
        } else {
          setAuthorInfo(authorInfo)
          // clear the form
          setErrors({})
          setAuthorInfo({})
          // redirect to the home page
          history.push(`/`)
        }
      })
      .catch(err => {
        console.log('AUTHOR FORM: Error after updating the author: ', err)
      })
  }

  return (
    <>
      <div>
        <h3 className='text-start'>
          Edit this author: <span className='text-info h2'>{author}</span>
        </h3>
      </div>
      {/* A Form component will go here but for now I'm just putting it in */}
      {/* <AuthorForm /> */}
      {/* <AuthorForm /> */}
      {/* <form onSubmit={handleSubmit} className='text-start'> */}
      <form onSubmit={submitHandler} className='text-start'>
        <div className='mb-3 text-start'>
          <label htmlFor='author'>Author Name</label>
          <input
            type='text'
            className='form-control'
            id='author'
            name='author'
            placeholder='Author Name'
            value={author}
            onChange={changeHandler}
          />
          <p className='text-danger'>{errors.author?.message}</p>
        </div>

        <Button color='blue' text='Submit Author Edits' type='submit' />

        <Link className='m-2' to='/'>
          <Button color='grey' text='Cancel' />
        </Link>
        {/* <Button color='red' text='Delete' /> */}
      </form>
    </>
  )
}

export default NewAuthor
