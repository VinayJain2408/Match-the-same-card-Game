import React, { useState } from 'react'
import './Card.css'
import backcard from './assets/backimage-removebg-preview.png'
import block from './assets/block-removebg-preview.png'
import plus4 from './assets/plus4card.webp'
import reverse from './assets/reverse-removebg-preview.png'
import colorchange from './assets/colorchange-removebg-preview.png'
import num5 from './assets/card5.png'
import num9 from './assets/card9.png'
// import num6 from './assets/card7.png'
// import num7 from './assets/card6.png'
function Card() {
    const data = [
        { pic: backcard, id: 1 },
        { pic: block, id: 2 },
        { pic: plus4, id: 3 },
        { pic: reverse, id: 4 },
        { pic: colorchange, id: 5 },
        { pic: num5, id: 6 },
        { pic: num9, id: 7 },
        { pic: block, id: 2 },
        { pic: plus4, id: 3 },
        { pic: reverse, id: 4 },
        { pic: colorchange, id: 5 },
        { pic: num5, id: 6 },
        { pic: num9, id: 7 },
        // { pic: num6, id: 8 },
        // { pic: num7, id: 9 },
    ]




    return (
        <div className='wrapper'>
        
            <div className='cards'>
        {
                data.map((card) => {
                    return (
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src= {backcard} />
                            </div>
                            <div class="flip-card-back">
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
export default Card












// useEffect(() => {

//     for (let i = data.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [data[i], data[j]] = [data[j], data[i]];
//     }
// }, [])


// const [flip, setflip] = useState([]);
// const [check, setcheck] = useState([]);


// function handleclick(index, id) {
//     setflip([...flip, index])
//     setcheck([...check, id])
//     if (flip.length === 2) {
//         if (check[0] === check[1]) {
//             console.log("done")
//             setflip([])
//             setcheck([])
//         }
//         else {
//             setflip([])
//             setcheck([])
//         }
//     }
// }


// return (
//     <div className='wrapper'>
//         <div className='cardbox'>
//             {
//                 data.map((element, index) => {
//                     return (
//                         <div className="flip-card" key={index} onClick={() => { handleclick(index, element.id) }}>
//                             <div className="flip-card-inner" style={{ transform: index === flip[0] || index === flip[1] ? 'rotateY(180deg)' : 'none' }}>
//                                 <div className="flip-card-front" >
//                                     <img src={backimage}></img>
//                                 </div>
//                                 <div className="flip-card-back">
//                                     <img src={element.Image}></img>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>

