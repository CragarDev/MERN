import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Error from './Error'

const Planet = props => {
  // set up object variable to collect planet data from API
  const [planet, setPlanet] = useState({})
  // console.log('Planet: planet', planet)

  const [error, setError] = useState(false)
  // console.log('People: error', error)

  // deconstruct the keys from planet object
  const {
    name,
    population,
    gravity,
    climate,
    rotation_period,
    orbital_period,
    diameter,
    terrain,
    surface_water
  } = planet

  // get state variables
  // const { selectedSection, selectedId } = useState()
  const { id } = useParams()
  // console.log('"Planet:" selectedSection from state', selectedSection)
  // console.log('"Planet:" selectedId from state', selectedId)
  // console.log('"Planet:" id from params', id)

  useEffect(() => {
    // console.log('Planet: useEffect')
    // planet page
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then(response => {
        setError(false)
        // console.log('Planet: response', response)
        setPlanet(response.data)
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
        <h3 className='text-center mb-3'>Star Wars - Planets</h3>
        <div className='container bg-secondary p-5 w-75 border border-danger border-3'>
          <h1 className='fw-bold text-danger'>{name}</h1>
          {/* vertical table for the information */}
          <table className='d-table table-hover table-dark'>
            <tbody>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Population:{' '}
                </th>
                <td className='text-start h4 mb-5'>{population}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Terrain:{' '}
                </th>
                <td className='text-start h4 mb-5'>{terrain}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Climate:{' '}
                </th>
                <td className='text-start h4 mb-5'>{climate}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Surface Water:{' '}
                </th>
                <td className='text-start h4 mb-5'>{surface_water}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Diameter:{' '}
                </th>
                <td className='text-start h4 mb-5'>{diameter}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Gravity:{' '}
                </th>
                <td className='text-start h4 mb-5'>{gravity}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Rotation Period:{' '}
                </th>
                <td className='text-start h4 mb-5'>{rotation_period}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  orbital_period:{' '}
                </th>
                <td className='text-start h4 mb-5'>{orbital_period}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default Planet
