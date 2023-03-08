import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar';
import Trusted from '../Trusted'


function About() {

  const people = [
    {
      name: 'Akinniran Oke',
      role: 'Co-Founder / CEO',
      imageUrl:
        '/images/nniranp.png',
    },
    {
      name: 'Emeritus Professor Olugbemiro Jegede',
      role: 'CHAIRMAN',
      imageUrl:
        '/images/profjegede.png',
    },
    {
      name: 'Mr. Ralph Suinner',
      role: 'EXECUTIVE DIRECTOR',
      imageUrl:
        '/images/ralph.jpeg',
    },
    {
      name: 'Dr. Ifabiyi G. Olanrewaju',
      role: 'NON-EXECUTIVE DIRECTOR',
      imageUrl:
        '/images/drfabiyi.png',
    },
    {
      name: 'Mrs. Omolola Oyebimpe O.',
      role: 'EXECUTIVE DIRECTOR',
      imageUrl:
        '/images/lola.jpeg',
    },
    {
      name: 'Dr. Babatunde Oghenobruche Obrimah',
      role: 'NON-EXECUTIVE DIRECTOR',
      imageUrl:
        '/images/drbabatunde.png',
    },
    


    

    // More people...
  ];
  
    return (
      <>
           <Navbar />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            At Online Education System (OES), our solution will help you to acheive a complete AI Integrated, e-Learning management system which addresses school data analytics, stakeholder's management connection, aggregation for policy formation and student performance improvement. This can be for stakeholders such as universities, schools, students and other educational stakeholders.
            </p><br/>
       
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div> 
      <Trusted />

         <Footer/>
</>
    )
  }

export default About
