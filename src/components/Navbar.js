import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import Logo from './Logo'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if(window.innerWidth <= 960){
        setButton(false)
      }else{
        setButton(true)
      }
    }

    window.addEventListener('resize', showButton);

    useEffect(() =>{
      showButton()
    }, [])
    let url="https://applications.oes.com.ng/OESWebApp/";
    let url1="https://applications.oes.com.ng/OESWebApp/register.do";

  return (
    <div>
      <nav className="navbar">
          <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  <Logo/>  Online Education System  
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                 <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              
                   <li className='nav-item'>
                       <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                           About Us
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/feature' className='nav-links' onClick={closeMobileMenu}>
                           OES Features
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                           Contact Us
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <a href={url} className='nav-links-mobile' onClick={closeMobileMenu}>
                           Sign Up
                       </a>
                   </li>
               </ul>
               {button &&  <a href={url}> <Button buttonStyle='btn--primary' url={url}>LOGIN</Button></a>} &nbps;
               {button &&  <a href={url1}> <Button buttonStyle='btn--primary' url={url1}>SIGN UP</Button></a>}
          </div>
      </nav>
    </div>
  )
}

export default Navbar
//rfce