import React, { useState } from 'react'

const UserForm = props => {
  // variables to hold the state of the form
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  // function to handle the change of the username
  const createUser = e => {
    e.preventDefault()
    const newUser = { firstName, lastName, email, password, passwordConfirm }
    // inside of the createUser function
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setPasswordConfirm('')
    // console.log('Welcome', newUser)
  }

  return (
    <>
      <div className='container w-50 mt-5'>
        <h3 className='text-center'>User Input</h3>
        <form onSubmit={createUser}>
          {/* first name */}
          <div class='input-group m-1 p-2 bg-secondary rounded'>
            <span class='input-group-text'>First Name: </span>
            <input
              type='text'
              class='form-control'
              onChange={e => setFirstName(e.target.value)}
              value={firstName}
            ></input>
          </div>
          {/* last name */}
          <div class='input-group m-1 p-2 bg-secondary rounded'>
            <span class='input-group-text'>Last Name: </span>
            <input
              type='text'
              class='form-control'
              onChange={e => setLastName(e.target.value)}
              value={lastName}
            ></input>
          </div>

          {/* email */}
          <div class='input-group m-1 p-2 bg-secondary rounded'>
            <span class='input-group-text'>Email Address: </span>
            <input
              type='text'
              class='form-control'
              onChange={e => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          {/* password */}
          <div class='input-group m-1 p-2 bg-secondary rounded'>
            <span class='input-group-text'>Password: </span>
            <input
              type='text'
              class='form-control'
              onChange={e => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>

          {/* password confirm */}
          <div class='input-group m-1 p-2 bg-secondary rounded'>
            <span class='input-group-text'>Confirm Password: </span>
            <input
              type='text'
              class='form-control'
              onChange={e => setPasswordConfirm(e.target.value)}
              value={passwordConfirm}
            ></input>
          </div>

          {/* <input
            className='btn btn-success mt-2'
            type='submit'
            value='Create User'
          /> */}
        </form>

        <h4 className='text-center mt-5 mb-2'>Your Form Data</h4>
        <div className='container w-50'>
          <p>
            First Name: <span className='text-info h5'>{firstName}</span>
          </p>
          <p>
            Last Name: <span className='text-info h5'>{lastName}</span>
          </p>
          <p>
            Email: <span className='text-warning h5'>{email}</span>
          </p>
          <p>
            Password: <span className='text-danger h5'>{password}</span>
          </p>
          <p>
            Confirm Password:{' '}
            <span className='text-danger h5'>{passwordConfirm}</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default UserForm
