import React from 'react';
import { useState } from 'react';//react hooks
import styles from './Navbar.module.css';//css
import brand from '../image/rightlogo.svg';//img
import search from '../image/search.svg'//img
import love from '../image/love.svg'//img
import user from '../image/user.svg';//img
import bag from '../image/bag.svg';//img
import downlogo from '../image/downlogo.svg';//img
import { Link } from "react-router-dom";//router
// import React from 'react';
function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <div className={styles.logobox}>
            {/*here we used conditional rendring and string interpolation.we showing after medium screen.*/}
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
            <div className={styles.brand}>
            <img src={brand}></img>
            </div>
            <Link to='Appscrip-task-swarup/' className={`${styles.logo}`}>Trend Trader</Link>
            <div className={styles.toplogobox}>
              <img src={search} alt="serach logo" />
              <img src={love} alt="love logo" />
              <img src={bag} alt="bag logo" />
              <img src={user} alt="user logo" />
              <div className={styles.eng}><p className={styles.engp}>ENG</p><img src={downlogo} alt="downlogo" /></div>
            </div>
          </div>
          {/*here we used conditional rendring and string interpolation*/}
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='#' className={`${styles.navLink}`}>SHOP</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>SKILLS</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>STORIES</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>ABOUT</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>CONTACT US</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
;