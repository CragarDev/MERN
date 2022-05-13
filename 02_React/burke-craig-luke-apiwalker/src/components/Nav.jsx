import React from 'react'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'

// console.log('start code')

const Nav = props => {
  // set up state variables
  const [selectedSection, setSelectedSection] = useState('')
  const [selectedId, setSelectedId] = useState('')
  const [count, setCount] = useState(0)
  let listCount = ''

  // get the number of items in each list and display them above the input field
  const listCounter = {
    people: ' - 83 People',
    films: ' - 7 Films',
    planets: ' - 61 Planets',
    species: ' - 36 Species',
    starships: ' - 37 Starships',
    vehicles: ' - 38 Vehicles'
  }

  if (selectedSection === 'people') {
    listCount = listCounter.people
  } else if (selectedSection === 'planets') {
    listCount = listCounter.planets
  } else if (selectedSection === 'starships') {
    listCount = listCounter.starships
  } else if (selectedSection === 'vehicles') {
    listCount = listCounter.vehicles
  } else if (selectedSection === 'films') {
    listCount = listCounter.films
  } else if (selectedSection === 'species') {
    listCount = listCounter.species
  }

  // set up history object
  const history = useHistory()
  // console.log('Nav: history', history)

  // set up submit function
  const submitHandler = e => {
    e.preventDefault()
    // console.log('submitting the form')
    setSelectedSection('')
    setSelectedId('')
    setCount(count + 1)
    // console.log('cleared the form')

    // if state variables are empty
    // send the user to the error page
    if (selectedSection === '' || selectedId === '') {
      history.push('/error')
    } else {
      // otherwise, send the user to the selected page
      history.push(`/${selectedSection}/${selectedId}`)
    }
  }

  return (
    <>
      <div className='container text-center mt-3'>
        <h1>Luke APIWalker</h1>
      </div>
      <section>
        <form onSubmit={submitHandler} className='flex'>
          <div className='container d-flex gap-3 justify-content-center'>
            <div className=''>
              <label className='form-label h5'>Search for:</label>
              <select
                className='form-select'
                onChange={e => {
                  setSelectedSection(e.target.value)
                }}
                value={selectedSection}
              >
                {/* <option disabled selected> */}
                <option>Search Selection</option>
                <option value='people'>People</option>
                <option value='planets'>Planets</option>
                <option value='species'>Species</option>
                <option value='vehicles'>Vehicles</option>
                <option value='starships'>Starships</option>
                <option value='films'>Films</option>
              </select>
            </div>
            <div className=''>
              <label className='form-label'>Enter an ID {listCount}: </label>
              <input
                type='number'
                value={selectedId}
                className='form-control'
                id='id'
                placeholder='id'
                onChange={e => {
                  setSelectedId(e.target.value)
                }}
              ></input>
            </div>
          </div>
          <div className='container w-25 mt-3'>
            <input
              className='btn-block btn-outline-success'
              type='submit'
              value='Submit Search'
            />
          </div>
        </form>
      </section>
    </>
  )
}

export default Nav
