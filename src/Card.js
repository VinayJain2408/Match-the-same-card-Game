import React, { useState } from 'react'
import './Card.css'
import backcard from './assets/UNO-Back_1.png'
import block from './assets/block-removebg-preview.png'
import plus4 from './assets/plus4card.webp'
import reverse from './assets/reverse-removebg-preview.png'
import colorchange from './assets/colorchange-removebg-preview.png'
import num5 from './assets/card5.png'
import num9 from './assets/card9.png'


function Card() {
    const data = [
        // { pic: backcard, id: 1 },
        { pic: block, id: 1 },
        { pic: plus4, id: 2 },
        { pic: reverse, id: 3 },
        { pic: colorchange, id: 4 },
        { pic: num5, id: 5 },
        { pic: num9, id: 6 },
        { pic: block, id: 1 },
        { pic: plus4, id: 2 },
        { pic: reverse, id: 3 },
        { pic: colorchange, id: 4 },
        { pic: num5, id: 5 },
        { pic: num9, id: 6 }
    ]

    function handlerClick(){
        console.log('vinay jain')
        
    }

    return (
        <div className='wrapper'>
        
            <div className='cards'>
        {
                data.map((card ,index) => {
                    return (
                    <div className="flip-card" key={index} onClick={()=>{handlerClick(index)}} >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <img src= {backcard} />
                            </div>
                            <div className="flip-card-back">
                                <img src={card.pic} />
                            </div>
                        </div>
                    </div>
                    )
                })
        }
            </div>
        </div>
    )
}
export default Card;
