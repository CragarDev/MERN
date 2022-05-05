import React from 'react'

const PersonCard = props => {
  const { firstName, lastName, age, hairColor } = props
  return (
    <div className='container border border-success border-5 rounded m-3 p-1'>
      <div className='container border border-success border-2 rounded'>
        <h1 className='text-primary'>
          {lastName},<br /> {firstName}
        </h1>
        <p className='text-danger'>Age: {age}</p>
        <p className='text-warning'>Hair Color: {hairColor}</p>
      </div>
    </div>
  )
}
export default PersonCard
