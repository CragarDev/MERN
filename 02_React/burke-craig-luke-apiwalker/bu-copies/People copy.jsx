import React from 'react'
import Nav from '../src/components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const People = props => {
  // set up object variable to collect data from API
  const [person, setPerson] = useState({})
  console.log('Person: person', person)

  // variable for Error message
  // const [error, setError] = useState(false)

  // deconstruct the keys from person object
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    gender,
    birth_year,
    homeworld
  } = person

  // console.log('name', name)
  // console.log('height', height)
  // console.log('hair_color', hair_color)
  // console.log('skin_color', skin_color)
  // console.log('eye_color', eye_color)
  // console.log('gender', gender)
  // console.log('birth_year', birth_year)
  // console.log('homeworld', homeworld)

  // get state variables
  const { selectedSection, selectedId } = useState()
  const { id } = useParams()
  console.log('"People:" selectedSection from state', selectedSection)
  console.log('"People:" selectedId from state', selectedId)
  // console.log('"People:" id from params', id)

  useEffect(() => {
    // console.log('People: useEffect')
    // people page
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then(response => {
        setError(false)
        console.log('People: response', response)
        // console.log('People: response.data', response.data)
        // console.log('People: response.data.name', response.data.name)
        setPerson(response.data)
      })
      .catch(err => {
        setError(true)
        console.log('These are not the droids you are looking for...', err)
      })
    // get planet page for homeworld name
    axios
      .get(`https://swapi.dev/api/planets/1`) // would need to pull the id from the planet object ---
      .then(response => {
        console.log('People: planet response', response)
        // setPlanetPageOne(response.data.results)
      })
      .catch(err => {
        console.log('These are not the droids you are looking for...', err)
      })
  }, [selectedId])

  return (
    <>
      {/* {error == true} ?
      <div className='error'>
        <img
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscreenrant.com%2Fwp-content%2Fuploads%2F2016%2F12%2FStar-Wars-A-New-Hope-Obi-Wan-Kenobi.jpg&f=1&nofb=1'
          alt='obione'
          width='100px'
        />
        <h3 className='text-danger'>
          These are not the droids you are looking for!
        </h3>
      </div>: */}
      <h3 className='text-center mb-3'>Star Wars - People</h3>
      <div className='container bg-secondary p-5 w-75 border border-success border-3'>
        <h1 className='fw-bold text-success'>{name}</h1>
        {/* vertical table for the information */}
        <table className='d-table table-hover table-dark'>
          <tbody>
            <tr>
              <th className='fw-bold text-end pe-3' scope='col'>
                Height:{' '}
              </th>
              <td className='text-start h4 mb-5'>{height} cm</td>
            </tr>
            <tr>
              <th className='fw-bold text-end pe-3' scope='col'>
                Mass:{' '}
              </th>
              <td className='text-start h4 mb-5'>{mass}</td>
            </tr>
            <tr>
              <th className='fw-bold text-end pe-3' scope='col'>
                Hair Color:{' '}
              </th>
              <td className='text-start h4 mb-5'>{hair_color}</td>
            </tr>
            <tr>
              <th className='fw-bold text-end pe-3' scope='col'>
                Skin Color:{' '}
              </th>
              <td className='text-start h4 mb-5'>{skin_color}</td>
            </tr>
            <tr>
              <th className='fw-bold text-end pe-3' scope='col'>
                Eye Color:{' '}
              </th>
              <td className='text-start h4 mb-5'>{eye_color}</td>
            </tr>
            <tr>
              <th className='fw-bold text-end pe-3' scope='col'>
                Gender:{' '}
              </th>
              <td className='text-start h4 mb-5'>{gender}</td>
            </tr>
            <tr>
              <th className='fw-bold text-end pe-3' scope='col'>
                Birth Year:{' '}
              </th>
              <td className='text-start h4 mb-5'>{birth_year}</td>
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

export default People
