import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Error from './Error'

const Starship = props => {
  // set up object variable to collect data from API
  const [starship, setStarship] = useState({})
  // console.log('starship', starship)

  const [error, setError] = useState(false)
  // console.log('People: error', error)

  // deconstruct the keys from starship object
  const {
    name,
    model,
    manufacturer,
    starship_class,
    hyperdrive_rating,
    crew,
    passengers,
    cost_in_credits,
    consumables,
    length,
    cargo_capacity,
    max_atmosphering_speed,
    MGLT
  } = starship

  // get state variables
  // const { selectedSection, selectedId } = useState()
  const { id } = useParams()
  // console.log('"Starship:" selectedSection from state', selectedSection)
  // console.log('"Starship:" selectedId from state', selectedId)
  // console.log('"Starship:" id from params', id)

  useEffect(() => {
    // console.log('Starship: useEffect')
    // people page
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then(response => {
        // console.log('Starship: response', response)
        setError(false)
        // console.log('Starship: response.data', response.data)
        // console.log('Starship: response.data.name', response.data.name)
        setStarship(response.data)
      })
      .catch(err => {
        setError(true)
        console.log('These are not the droids you are looking for...', err)
      })
  }, [id])
  // if error is true, display error message
  if (error) {
    return <Error />
  } else {
    return (
      <>
        <h3 className='text-center mb-3'>Star Wars - Starships</h3>
        <div className='container bg-secondary p-5 w-75 border border-danger border-3'>
          <h1 className='fw-bold text-danger'>{name}</h1>
          {/* vertical table for the information */}
          <table className='d-table table-hover table-dark'>
            <tbody>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Model:{' '}
                </th>
                <td className='text-start h4 mb-5'>{model} cm</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Manufacturer:{' '}
                </th>
                <td className='text-start h4 mb-5'>{manufacturer}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Starship Class:{' '}
                </th>
                <td className='text-start h4 mb-5'>{starship_class}</td>
              </tr>

              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Hyperdrive Rating:{' '}
                </th>
                <td className='text-start h4 mb-5'>{hyperdrive_rating}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Crew:{' '}
                </th>
                <td className='text-start h4 mb-5'>{crew}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Passengers:{' '}
                </th>
                <td className='text-start h4 mb-5'>{passengers}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Cost In Credits:{' '}
                </th>
                <td className='text-start h4 mb-5'>{cost_in_credits}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Consumables:{' '}
                </th>
                <td className='text-start h4 mb-5'>{consumables}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Length:{' '}
                </th>
                <td className='text-start h4 mb-5'>{length}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Cargo Capacity:{' '}
                </th>
                <td className='text-start h4 mb-5'>{cargo_capacity}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Max Atmosphering Speed:{' '}
                </th>
                <td className='text-start h4 mb-5'>{max_atmosphering_speed}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  MGLT:{' '}
                </th>
                <td className='text-start h4 mb-5'>{MGLT}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default Starship
