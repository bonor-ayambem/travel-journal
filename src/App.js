import React from "react"
import globe from './globe.png'


export default function App(){
  return(
    <div className='container'>
      <header className='header'>
        <img src={globe} alt='globe icon' className="globe-icon"/>
        <p className="title">my travel journal</p>
      </header>
    </div>
  )
}