import React, { useState } from 'react'

const UserForm = props => {
  // variables to hold the state of the form
  const [firstName, setFirstName] = useState('')
  const [firstNameWarning, setFirstNameWarning] = useState(false)
  const [lastName, setLastName] = useState('')
  const [lastNameWarning, setLastNameWarning] = useState(false)
  const [email, setEmail] = useState('')
  const [emailWarning, setEmailWarning] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordWarning, setPasswordWarning] = useState(false)
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [passwordConfirmWarning, setPasswordConfirmWarning] = useState(false)

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
  // function to handle the validation of the first name
  const handleFirstName = e => {
    setFirstName(e.target.value)
    if (e.target.value.length < 2) {
      setFirstNameWarning('First name must be greater than 2 characters!')
    } else {
      setFirstNameWarning(false)
    }
  }
  // function to handle the validation of the last name
  const handleLastName = e => {
    setLastName(e.target.value)
    if (e.target.value.length < 2) {
      setLastNameWarning('Last name must be greater than 2 characters!')
    } else {
      setLastNameWarning(false)
    }
  }
  // function to handle the validation of the email
  const handleEmail = e => {
    setEmail(e.target.value)
    if (e.target.value.length < 5) {
      setEmailWarning('Email must be greater than 5 characters!')
    } else {
      setEmailWarning(false)
    }
  }
  // function to handle the validation of the password
  const handlePassword = e => {
    setPassword(e.target.value)
    if (e.target.value.length < 8) {
      setPasswordWarning('Password must be greater than 8 characters!')
    } else if (e.target.value !== passwordConfirm) {
      setPasswordWarning('Passwords must match!')
    } else {
      setPasswordWarning(false)
    }
  }
  // function to handle the validation of the password confirm
  const handlePasswordConfirm = e => {
    setPasswordConfirm(e.target.value)
    if (e.target.value.length < 8) {
      setPasswordConfirmWarning('Password must be greater than 8 characters!')
    } else if (e.target.value !== password) {
      setPasswordConfirmWarning('Passwords must match!')
    } else {
      setPasswordWarning(false)
      setPasswordConfirmWarning(false)
    }
  }
  return (
    <>
      <div className='container w-50 mt-5'>
        <h3 className='text-center mb-3'>More Forms - User Input</h3>
        <form onSubmit={createUser}>
          {/* first name */}
          <div className='input-group m-1 p-2 bg-secondary rounded'>
            <span className='input-group-text'>First Name: </span>
            <input
              type='text'
              className='form-control form-control-lg'
              onChange={handleFirstName}
              value={firstName}
            />
          </div>
          <div className='ms-5'>
            {firstNameWarning ? (
              <p style={{ color: 'red' }}>{firstNameWarning}</p>
            ) : (
              ''
            )}
          </div>
          {/* last name */}
          <div className='input-group m-1 p-2 bg-secondary rounded'>
            <span className='input-group-text'>Last Name: </span>
            <input
              type='text'
              className='form-control form-control-lg'
              onChange={handleLastName}
              value={lastName}
            />
          </div>
          <div className='ms-5'>
            {lastNameWarning ? (
              <p style={{ color: 'red' }}>{lastNameWarning}</p>
            ) : (
              ''
            )}
          </div>

          {/* email */}
          <div className='input-group m-1 p-2 bg-secondary rounded'>
            <span className='input-group-text'>Email Address: </span>
            <input
              type='text'
              className='form-control form-control-lg'
              onChange={handleEmail}
              value={email}
            />
          </div>
          <div className='ms-5'>
            {emailWarning ? <p style={{ color: 'red' }}>{emailWarning}</p> : ''}
          </div>
          {/* password */}
          <div className='input-group m-1 p-2 bg-secondary rounded'>
            <span className='input-group-text'>Password: </span>
            <input
              type='text'
              className='form-control form-control-lg'
              onChange={handlePassword}
              value={password}
            />
          </div>
          <div className='ms-5'>
            {passwordWarning ? (
              <p style={{ color: 'red' }}>{passwordWarning}</p>
            ) : (
              ''
            )}
          </div>

          {/* password confirm */}
          <div className='input-group m-1 p-2 bg-secondary rounded'>
            <span className='input-group-text'>Confirm Password: </span>
            <input
              type='text'
              className='form-control form-control-lg'
              onChange={handlePasswordConfirm}
              value={passwordConfirm}
            />
          </div>
          <div className='ms-5'>
            {passwordConfirmWarning ? (
              <p style={{ color: 'red' }}>{passwordConfirmWarning}</p>
            ) : (
              ''
            )}
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
