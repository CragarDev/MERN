import React from 'react'
import Nav from '../src/components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Planet = props => {
  // set up object variable to collect planet data from API
  const [planet, setPlanet] = useState({})
  console.log('Planet: planet', planet)

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

  // console.log('name', name)
  // console.log('population', population)
  // console.log('gravity', gravity)
  // console.log('climate', climate)
  // console.log('rotation_period', rotation_period)
  // console.log('orbital_period', orbital_period)
  // console.log('diameter', diameter)
  // console.log('terrain', terrain)
  // console.log('surface_water', surface_water)

  // get state variables
  const { selectedSection, selectedId } = useState()
  const { id } = useParams()
  console.log('"Planet:" selectedSection from state', selectedSection)
  console.log('"Planet:" selectedId from state', selectedId)
  console.log('"Planet:" id from params', id)

  useEffect(() => {
    // console.log('Planet: useEffect')
    // planet page
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then(response => {
        console.log('People: response', response)
        // console.log('Planet: response.data', response.data)
        // console.log('Planet: response.data.name', response.data.name)
        // console.log(
        //   'Planet: response.data.population',
        //   response.data.population
        // )
        // console.log('Planet: response.data.gravity', response.data.gravity)
        // console.log('Planet: response.data.climate', response.data.climate)
        // console.log(
        //   'Planet: response.data.rotation_period',
        //   response.data.rotation_period
        // )
        // console.log(
        //   'Planet: response.data.orbital_period',
        //   response.data.orbital_period
        // )
        // console.log('Planet: response.data.diameter', response.data.diameter)
        // console.log('Planet: response.data.terrain', response.data.terrain)
        // console.log(
        //   'Planet: response.data.surface_water',
        //   response.data.surface_water
        // )
        setPlanet(response.data)
      })
      .catch(err => {
        console.log('These are not the droids you are looking for...', err)
      })
  }, [id])

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

export default Planet
