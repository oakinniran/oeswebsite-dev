import React from 'react'
import { Link } from 'react-router-dom';

export default function CardShape(props) {
  let url="https://applications.oes.com.ng/OESWebApp/createschoolout.do";
  return (
        <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
         <div className="col-6"> <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='school'
              src={props.src}
            />
          </figure></div><div  className="col-6">
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <br/>
            <hr />
            <br/>
             <button className="btn --btn-primary" ><font color="white">{props.profilelink}</font></button> 
          </div></div>
        </Link>
      </li>
    </>
  )
}
