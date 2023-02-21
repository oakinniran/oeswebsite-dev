import React from 'react'
import { Link } from 'react-router-dom'

function IntroCard(props) {
    return (
        <>
    <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          
          <div className='cards__item__info'>
            <p className='cards__item__text'>{props.text}</p>
          </div>     
         

        </Link>
      </li>
        </>
    )
}

export default IntroCard
