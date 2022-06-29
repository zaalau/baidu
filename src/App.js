import React, { Component } from 'react'
import Navigation from './components/navigation'
import Middle from './components/middle'
import News from './components/news'
import Bottom from './components/bottom'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='all'>
        <div className='top'>
          <Navigation/>
          <Middle/>
          <News/>
          
        </div>
        <Bottom/>
      </div>
    )
  }
}
