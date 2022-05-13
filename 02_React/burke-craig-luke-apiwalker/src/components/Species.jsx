import React from 'react'
import Error from './Error'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Species = props => {
  // set up object variable to collect data from API
  const [species, setSpecies] = useState({})
  // console.log('species', species)

  const [error, setError] = useState(false)
  // console.log('People: error', error)

  // deconstruct the keys from species object
  const {
    name,
    classification,
    designation,
    hair_colors,
    skin_colors,
    eye_colors,
    average_height,
    average_lifespan,
    language,
    homeworld
  } = species

  // get state variables
  // const { selectedSection, selectedId } = useState()
  const { id } = useParams()
  // console.log('"Species:" selectedSection from state', selectedSection)
  // console.log('"Species:" selectedId from state', selectedId)
  // console.log('"species:" id from params', id)

  useEffect(() => {
    // console.log('species: useEffect')
    // people page
    axios
      .get(`https://swapi.dev/api/species/${id}`)
      .then(response => {
        // console.log('Species: response', response)
        setError(false)
        // console.log('Species: response.data', response.data)
        // console.log('Species: response.data.name', response.data.name)
        setSpecies(response.data)
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
        <h3 className='text-center mb-3'>Star Wars - Species</h3>
        <div className='container bg-secondary p-5 w-75 border border-info border-3'>
          <h1 className='fw-bold text-info'>{name}</h1>
          {/* vertical table for the information */}
          <table className='d-table table-hover table-dark'>
            <tbody>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Classification:{' '}
                </th>
                <td className='text-start h4 mb-5'>{classification}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Designation:{' '}
                </th>
                <td className='text-start h4 mb-5'>{designation}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Language:{' '}
                </th>
                <td className='text-start h4 mb-5'>{language}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Hair Colors:{' '}
                </th>
                <td className='text-start h4 mb-5'>{hair_colors}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Skin Colors:{' '}
                </th>
                <td className='text-start h4 mb-5'>{skin_colors}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Eye Colors:{' '}
                </th>
                <td className='text-start h4 mb-5'>{eye_colors}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Average Height:{' '}
                </th>
                <td className='text-start h4 mb-5'>{average_height} cm</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Average Lifespan:{' '}
                </th>
                <td className='text-start h4 mb-5'>{average_lifespan}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Home World:{' '}
                </th>
                <td className='text-start h4 mb-5'>
                  {' '}
                  <a className='hw-link text-danger h4' href={homeworld}>
                    homeworld link
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default Species
