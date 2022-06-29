import React from 'react'
import Everyday from './everyday'
import City from './city'
import './index.css'

export default function Weather(props) {
  const [city,setCity] = React.useState(false)
  function x(city) {
    setCity(city)
  }
  
  return (
    <div className='weatherInput'>
      {city ? <City x={x} bye={props.bye}/>:<Everyday x={x}/>}
    </div>
  )
}
