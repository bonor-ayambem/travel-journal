import React from "react"
import Location from "./Location.js"
import globe from './globe.png'
import data from "./data.js"

console.log(data)

const places = data.map((place) => {
  return <Location details={place} />
})

export default function App(){
  return(
    <div className='container'>
      <header className='header'>
        <img src={globe} alt='globe icon' className="globe-icon"/>
        <p className="title">my travel journal</p>
      </header>
      <div>
        {places}
      </div>
    </div>
  )
}