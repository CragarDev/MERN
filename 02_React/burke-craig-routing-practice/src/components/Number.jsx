import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
  const { var1, color1, color2 } = useParams()
  console.log(var1, color1, color2)

  return (
    <>
      {isNaN(var1) ? (
        color1 === undefined ? (
          <div className='App mt-5'>
            <h1 className='text-warning'>The word is: {var1}</h1>
          </div>
        ) : (
          <div className='App mt-5'>
            <h1
              style={{
                minHeight: '50px',
                backgroundColor: color2,
                color: color1
              }}
            >
              The word is: {var1}
            </h1>
          </div>
        )
      ) : (
        <div className='App mt-5'>
          <h1 className='text-danger'>The number is: {var1}</h1>
        </div>
      )}
    </>
  )
}

export default Number
