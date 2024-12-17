import React from 'react'
import './index.css';


function Card(props){
    return(
        <div className='card'>
            <img src={props.img} alt='card-one'/>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Card;