import React, { useEffect, useState } from 'react'
import axious from 'axios'
import { Link } from 'react-router-dom'
import Button from './Button'

const AllAuthors = props => {
  // create a variable to hold the authors
  const [allAuthors, setAllAuthors] = useState([])
  const [deleteToggle, setDeleteToggle] = useState(false)

  // use effect to fetch all authors with axios
  useEffect(() => {
    axious
      .get('http://localhost:8000/api/authors')
      .then(res => {
        console.log('ALL_AUTHORS: response from server: ', res)
        setAllAuthors(res.data.results)
      })
      .catch(err => {
        console.log('ALL_AUTHORS: error from server: ', err)
      })
  }, [deleteToggle, props.newAuthorToggle])

  const deleteAuthor = _id => {
    console.log('ALL_AUTHORS: deleteAuthor: ', _id)
    axious
      .delete(`http://localhost:8000/api/authors/${_id}`)
      .then(res => {
        console.log('ALL_AUTHORS: deleteAuthor: ', res.data)
        setDeleteToggle(!deleteToggle)
      })
      .catch(err => {
        console.log('ALL_AUTHORS: deleteAuthor: ', err)
      })
  }

  return (
    <>
      <div className='container'>
        <h3 className='text-start'>We have quotes by these authors:</h3>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Author</th>
            <th scope='col'>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {/* here is the line item set up for each author */}
          {allAuthors.map(author => (
            <tr key={author._id}>
              <th>{author.author}</th>
              <td>
                <Link className='m-2' to={`/edit/${author._id}`}>
                  <Button color='purple' text='Edit Author' />
                </Link>

                <button
                  // onClick={deleteAuthor(author._id)}
                  onClick={e => {
                    deleteAuthor(author._id)
                  }}
                  className='btn btn-outline-danger'
                  text='Delete'
                >
                  Delete Author{' '}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default AllAuthors
