import React from 'react'
import IntroCard from '../IntroCard';


export default function ErCards() {
    return (
        <div>
        <h1>Learning Without Limits!</h1><br/>
         <div className='cards__container1'>
          <ul className='cards__items1'>
            <IntroCard
              text='Africa - Initiate, switch, and progress your career with recent Courses, Lessons, Certificates, and Degrees from top African Universities and Schools.'
              label='Er'
              path='/home'
            />
          </ul>
          </div>
        </div>
    )
}
