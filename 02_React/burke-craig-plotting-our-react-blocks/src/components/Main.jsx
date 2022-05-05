import React, { Component } from 'react'
import SubComponent from './SubComponent'
import Advertisement from './Advertisement'

class Main extends Component {
  render () {
    return (
      <div className='main'>
        <div className=' flex'>
          <SubComponent />
          <SubComponent />
          <SubComponent />
        </div>
        <Advertisement />
      </div>
    )
  }
}
export default Main
