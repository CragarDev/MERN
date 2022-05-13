import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Error from '../src/components/Error'

const People = props => {
  // console.log('1-- Entering the people component')

  // get state variables
  const { selectedSection, selectedId } = useState()
  const { id } = useParams()
  // console.log('6-- People: selectedSection from state', selectedSection)
  // console.log('7-- People: selectedId from state', selectedId)
  // console.log('8-- People: id from params', id)

  // get count from state variables
  const { count } = useState()
  // console.log('count', count)

  // set up object variable to collect data from API
  const [person, setPerson] = useState({})
  // console.log('2-- Person: person', person)

  const [error, setError] = useState(false)
  // console.log('People: error', error)

  const [homePlanet, setHomePlanet] = useState({})
  // console.log('3-- Person: homePlanet', homePlanet)

  // set up to use history
  const history = useHistory()
  // console.log('4-- People: history', history)

  // variable for the home planet name
  const { name: planetName } = homePlanet
  // console.log('5-- planetName', planetName) // undefined

  // convert the homeworld url and get the id
  const planetConverter = string => {
    // console.log(':::: Entering the planetConverter function ::::')
    const myArray = string.split('/')
    let idx = myArray[myArray.length - 2]
    return idx
  }

  // onclick go to the planet page with the id from the homeworld url through the converter
  const getPlanet = () => {
    // console.log(':::: Entering the getPlanet function ::::')
    const idx = planetConverter(homeworld)
    console.log('idx', idx)
    history.push(`/planets/${idx}`)
  }

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

  useEffect(() => {
    // console.log(':::: Entering the useEffect function ::::')
    // people page
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then(response => {
        console.log('== axios 1 === People: response', response)
        setError(false)
        // console.log('People in axios 1: error', error)
        setPerson(response.data)
        // console.log('== axios 1 === set the setPerson')
      })
      .catch(err => {
        setError(true)
        // console.log('People in axios 1: error', error)
        console.log('These are not the droids you are looking for...', err)
      })
      .then(() => {
        // console.log('== axios 2 === homeworld for axios2', homeworld)
        // planet page
        axios
          .get(homeworld)
          .then(response => {
            console.log('== axios 2 === Planet: response', response)
            setHomePlanet(response.data)
            // console.log('== axios 2 === set the setHomePlanet')
          })
          .catch(err => {
            console.log('PERSON-PLANET: getHomePlanet: err', err)
          })
      })
  }, [id])
  // console.log('9-- homeworld: ', homeworld)
  // console.log('10-- planetName: ', planetName)
  console.log('People: error', error)

  // if error is true, display error message
  if (error) {
    return <Error />
  } else {
    return (
      <>
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
                  Home World link:{' '}
                </th>
                <td className='text-start h4 mb-5'>
                  {' '}
                  <button
                    className='hw-link text-danger h4'
                    onClick={getPlanet}
                  >
                    homeworld link - {planetName}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default People
