import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardShape from './CardShape';
import IntroCard from './IntroCard';

function Cards() {
  return (
    <div className='cards'>
        <h1>Educational Content and OES Container As School Service !</h1><br/>

        <div className='cards__container1'>
        <p>Online Education System will give you the power to use it's educational contents and it's OES Application as a service.</p>

        <div className='cards__wrapper1'>
     
          <ul className='cards__items'>
            <CardShape
              src={require("../assets/school.jpeg")}
              text='Connect as a School.'
              label='Schools/Institutions'
              path='/connectasaschool'
              url="https://applications.oes.com.ng/OESWebApp/createschoolout.do"
              profilelink='Get Started - Profile School'
            />
            <CardShape
              src='https://er.oes.com.ng/img/secondary1.jpg'
              text='Connect as the Students and Parents'
              label='Tutorials for past questions on Exams and closing education sector gaps'
              path='/connectasastudent'
              url="https://applications.oes.com.ng/OESWebApp/register.do"
              profilelink='Get Started - Profile Student'

            />
              <CardShape
              src='https://er.oes.com.ng/img/basic.jpg'
              text='Connect as the Private Teacher'
              label='Sign In and Upload Your Content.'
              path='/connectasateacher'
              url="https://applications.oes.com.ng/OESWebApp/register.do"
              profilelink='Get Started - Private Teacher'

            />
      
          </ul>
        </div>
      </div>
      <h1>Learning Without Limits!</h1><br/>
      <div className='cards__container1'>
          <ul className='cards__items1'>
            <IntroCard
              text='A public digital library of open Educational resources. Explore, create, and collaborate with educators around Africa to improve curriculum and skill acquisation.'
              label='Luxury'
              path='/feature'
            />
          </ul>
          </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
     
          <ul className='cards__items'>
            <CardItem
              src='https://er.oes.com.ng/img/basic.jpg'
              text='Lessons for Basic Schools students.'
              label='Basic Schools'
              path='/erb'
            />
            <CardItem
              src='https://er.oes.com.ng/img/secondary1.jpg'
              text='Lessons for Senior Secondary Schools Students.'
              label='Secondary Schools'
              path='/er'
            />
            <CardItem
              src='https://er.oes.com.ng/img/university1.jpg'
              text='Lectures for Unversity Students with Certification'
              label='University'
              path='/eru'
            />
            <CardItem
              src='https://er.oes.com.ng/img/developer.jpg'
              text='Lectures for any Training Schools. '
              label='Training/Leadership Schools'
              path='/ert'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
