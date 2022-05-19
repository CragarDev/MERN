import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const AuthorForm = props => {
  return (
    <>
      <div>
        <h1>Author Form</h1>
      </div>
      {/* <form>
        <div class='mb-3 text-start'>
          <label for='author' class='form-label'>
            Author Name
          </label>
          <input
            type='text'
            class='form-control'
            id='author'
            placeholder='author name'
          ></input>
        </div>
        <Link className='m-2' to='/'>
          <Button color='grey' text='Cancel' />
        </Link>
        <Link className='m-2' to='/'>
          <Button color='blue' text='Submit' />
        </Link>
        <button type='submit' class='btn btn-primary'>
          Submit
        </button>
        <button type='cancel' class='btn btn-secondary'>
          Cancel
        </button>
      </form> */}
    </>
  )
}

export default AuthorForm
