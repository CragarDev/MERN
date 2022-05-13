import React from 'react'

const Error = () => {
  return (
    <>
      <h3 className='text-center mb-3 text-danger'>
        These are not the droids you are looking for!
      </h3>
      <div className='container bg-secondary p-5 w-50 border border-danger border-3'>
        <div className='error'>
          <img
            className='img-fluid'
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscreenrant.com%2Fwp-content%2Fuploads%2F2016%2F12%2FStar-Wars-A-New-Hope-Obi-Wan-Kenobi.jpg&f=1&nofb=1'
            alt='obione'
            height='300px'
          />
        </div>
        <h4 className='text-danger text-center mt-3'>
          Please make a selection and enter a number.
        </h4>
      </div>
    </>
  )
}

export default Error
