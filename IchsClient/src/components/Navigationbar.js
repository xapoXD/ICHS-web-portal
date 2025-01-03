// NavigationBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigationbar.module.css';

function NavigationBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/" className={styles.navLink} >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Table" className={styles.navLink} >
            Data k projektu
          </NavLink>
        </li>
        <li>
          <NavLink to="/RizikoveFaktory" className={styles.navLink} >
            Rizikové Faktory
          </NavLink>
        </li>
        <li>
          <NavLink to="/Dotaznik" className={styles.navLink} >
            Dotaznik
          </NavLink>
        </li>
        <li>
          <NavLink to="/Map" className={styles.navLink} >
            Mapa
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
