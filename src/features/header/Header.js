import React from 'react';
import { NavLink } from 'react-router-dom';
import logo48 from '../assets/logo48.png';
import styles from './Header.module.css';

const Header = () => {
  const link = [
    {
      id: 1,
      name: 'My Profile',
      path: '/',
    },
    {
      id: 2,
      name: 'Rockets',
      path: '/rockets',
    },
    {
      id: 3,
      name: 'Missions',
      path: '/missions',
    },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span><img className={styles.logo} src={logo48} alt="logo" /></span>
          <div className={styles.links}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {link.map((item) => (
                <li key={item.id} className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
