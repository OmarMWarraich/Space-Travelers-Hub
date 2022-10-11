import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo48 from '../assets/logo48.png';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split('/');

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span><img className={styles.logo} src={logo48} alt="logo" /></span>
          <div className={styles.links}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className={splitLocation[1] === '' ? 'active' : ''}>
                <NavLink
                  className="nav-link"
                  to="/"
                >
                  Missions
                </NavLink>
              </li>

              <li className={splitLocation[1] === 'rockets' ? 'active' : ''}>
                <NavLink
                  className="nav-link"
                  to="/rockets"
                >
                  Rockets
                </NavLink>
              </li>

              <li className={splitLocation[1] === 'profile' ? 'active' : ''}>
                <NavLink
                  className="nav-link"
                  to="/profile"
                >
                  My Profile
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
