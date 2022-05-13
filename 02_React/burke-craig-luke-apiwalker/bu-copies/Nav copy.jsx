import React from 'react'
import People from '../src/components/People'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

// console.log('start code')

const Nav = props => {
  // set up state variables
  const [selectedSection, setSelectedSection] = useState('')
  const [selectedId, setSelectedId] = useState(0)

  const { error } = props
  console.log('Nav: error', error)

  // set up history object
  const history = useHistory()

  // console.log('Nav: selectedSection from state', selectedSection === 'people')
  // console.log('Nav: selectedSection from state', selectedSection === 'planets')
  // console.log('Nav: selectedSection from state', selectedSection === 'films')
  // console.log('Nav: selectedSection from state', selectedSection === 'vehicles')
  // console.log('Nav: selectedSection from state', selectedSection === 'species')
  // console.log(
  //   'Nav: selectedSection from state',
  //   selectedSection === 'starships'
  // )
  // console.log()

  // set up submit function
  const submitHandler = e => {
    e.preventDefault()
    console.log('submit')
    if (error) {
      history.push('/error')
    } else {
      history.push(`/${selectedSection}/${selectedId}`)
    }
    setSelectedSection('')
    setSelectedId('')

    // console.log('selectedSection from Nav', selectedSection)
    // console.log('selectedId from Nav', selectedId)
    // go to the page with the selected section and id
    // <Link to= {`/${selectedSection}/${selectedId}`}> </Link>
    // clear the input fields
    e.target.reset()
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
              <label className='form-label'>ID:</label>
              <input
                type='number'
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
            {/* <Link to={`/${selectedSection}/${selectedId}`}> */}
            <input
              className='btn-block btn-outline-success'
              type='submit'
              value='Submit Search'
            />
            {/* </Link> */}
          </div>
        </form>
      </section>
    </>
  )
}

export default Nav
