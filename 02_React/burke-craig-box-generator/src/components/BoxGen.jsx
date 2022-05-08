import React, { useState } from 'react'

const BoxGen = () => {
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')

  // set a list to hold the boxes
  let [boxes, setBoxes] = useState([])

  const generateBox = e => {
    e.preventDefault()
    // console.log('generateBox')
    let newBox = {
      color,
      size
    }
    // console.log('newBox', newBox)
    setBoxes([...boxes, newBox])

    // boxes.map(box => {
    //   console.log('box', box)
    //   console.log('box color', box.color)
    //   console.log('box size', box.size)
    // })

    // reset the form
    setColor('')
    setSize('')
  }

  return (
    <>
      <div className='container text-start '>
        <form onSubmit={generateBox}>
          <div className='container d-flex justify-content-center align-items-center'>
            {/* color */}
            <div className='form-group me-3'>
              <label htmlFor=''>Enter a color:</label>
              <input
                type='text'
                className='form-control '
                placeholder='Enter
                    color'
                onChange={e => setColor(e.target.value)}
                value={color}
              />
            </div>
            {/* size */}
            <div className='form-group me-3'>
              <label htmlFor=''>Enter a size:</label>
              <input
                type='number'
                className='form-control '
                placeholder='Enter
                    size'
                onChange={e => setSize(e.target.value)}
                value={size}
              />
            </div>
            {/* submit button */}
            <div className='form-group text-start mt-3'>
              <input
                className='btn btn-success'
                type='submit'
                value='Generate A Box'
              />
            </div>
          </div>
        </form>
      </div>
      <hr />
      <div className='container d-flex flex-wrap justify-content-center'>
        {/* loop through each box in the list */}
        {boxes.map((box, index) => {
          return (
            <div
              className='container p-3 m-3'
              key={index}
              style={{
                backgroundColor: box.color,
                width: box.size + 'px',
                height: box.size + 'px'
              }}
            ></div>
          )
        })}
      </div>
    </>
  )
}
export default BoxGen
