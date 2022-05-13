import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Error from './Error'

const Film = props => {
  // set up object variable to collect data from API
  const [film, setFilm] = useState({})
  // console.log('film', film)

  const [error, setError] = useState(false)
  // console.log('People: error', error)

  // deconstruct the keys from Film object
  const { title, episode_id, director, producer, release_date } = film

  // console.log('title', title)
  // console.log('episode_id', episode_id)
  // console.log('director', director)
  // console.log('producer', producer)
  // console.log('release_date', release_date)

  // get state variables
  // const { selectedSection, selectedId } = useState()
  const { id } = useParams()
  // console.log('"Film:" selectedSection from state', selectedSection)
  // console.log('"Film:" selectedId from state', selectedId)
  // console.log('"Film:" id from params', id)

  useEffect(() => {
    console.log('Film: useEffect')
    // people page
    axios
      .get(`https://swapi.dev/api/films/${id}`)
      .then(response => {
        // console.log('Film: response', response)
        // console.log('Film: response.data', response.data)
        // console.log('Film: response.data.name', response.data.name)
        setError(false)
        setFilm(response.data)
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
        <h3 className='text-center mb-3'>Star Wars - Films</h3>
        <div className='container bg-secondary p-5 w-75 border border-warning border-3'>
          <h1 className='fw-bold text-warning'>{title}</h1>
          {/* vertical table for the information */}
          <table className='d-table table-hover table-dark'>
            <tbody>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Episode Id:{' '}
                </th>
                <td className='text-start h4 mb-5'>{episode_id}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Director:{' '}
                </th>
                <td className='text-start h4 mb-5'>{director}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Producer:{' '}
                </th>
                <td className='text-start h4 mb-5'>{producer}</td>
              </tr>
              <tr>
                <th className='fw-bold text-end pe-3' scope='col'>
                  Release Date:{' '}
                </th>
                <td className='text-start h4 mb-5'>{release_date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default Film
