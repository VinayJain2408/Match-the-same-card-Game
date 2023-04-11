import React, { useState } from 'react'
import './Card.css'

function Card() {
    const [Convert , setConvert] = useState(false)
    function change(){
        setConvert(true)
        
    }

  return (
    <div className='Container'>
        <div className='box' onClick={change}><p>Cards</p></div>
        <div className='box' onClick={change}><p>Cards</p></div>
        <div className='box' onClick={change}><p>Cards</p></div>
        <div className='box' onClick={change}><p>Cards</p></div>
        <div className='box'><p>Cards</p></div>
        <div className='box'><p>Cards</p></div>
        <div className='box'><p>Cards</p></div>
        <div className='box'><p>Cards</p></div>
        <div className='box'><p>Cards</p></div>
        <div className='box'><p>Cards</p></div>
        <div className='box'><p>Cards</p></div>
        <div className='box'><p>Cards</p></div>
    </div>
  )
}

export default Card