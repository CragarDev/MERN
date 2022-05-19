import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Button from './Button'
import axios from 'axios'
// import AuthorForm from './AuthorForm'

const NewAuthor = props => {
  // create the variables
  const [author, setAuthor] = useState('')
  console.log('author', author)
  const [errors, setErrors] = useState({})
  const history = useHistory()

  // set up the submit function
  const handleSubmit = e => {
    e.preventDefault()
    console.log('author', author)

    // create the author
    const newAuthor = {
      author
    }
    console.log('newAuthor', newAuthor)

    // use axios to post the author
    axios
      .post('http://localhost:8000/api/authors/new', newAuthor)
      .then(res => {
        console.log('AUTHOR FORM: Response after posting new author: ', res)

        if (res.data.error) {
          console.log('AUTHOR FORM: Error: ', res.data.error)
          setErrors(res.data.error.errors)
        } else {
          // clear the form
          setAuthor('')
          setErrors({})
          // redirect to the home page
          props.setNewAuthorToggle(!props.newAuthorToggle)
          history.push(`/`)
        }
      })
      .catch(err => {
        console.log('AUTHOR FORM: Error: ', err)
      })
    console.log('AUTHOR FORM: Submitted')
  }

  return (
    <>
      <div>
        <h3 className='text-start'>Add a new author</h3>
      </div>
      <hr />
      {/* A Form component will go here but for now I'm just putting it in */}
      {/* <AuthorForm /> */}
      <form onSubmit={handleSubmit} className='text-start'>
        <div className='mb-3 text-start'>
          <label htmlFor='author'>Author Name</label>
          <input
            type='text'
            className='form-control'
            id='author'
            placeholder='Author Name'
            value={author}
            onChange={e => {
              setAuthor(e.target.value)
            }}
          />
          <p className='text-danger'>{errors.author?.message}</p>
        </div>

        <Button color='blue' text='Submit Author' type='submit' />

        <Link className='m-2' to='/'>
          <Button color='grey' text='Cancel' />
        </Link>
      </form>
    </>
  )
}

export default NewAuthor
