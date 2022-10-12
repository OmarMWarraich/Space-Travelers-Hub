import React from 'react';
import { NavLink } from 'react-router-dom';
import logo256 from '../assets/logo256.png';
import styles from './Header.module.css';

const Header = () => {
  const links = [
    { to: '/', text: 'Missions' },
    { to: '/rockets', text: 'Rockets' },
    { to: '/profile', text: 'Profile' },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span><img className={styles.logo} src={logo256} alt="logo" /></span>
          <span className="navbar-brand"><h1>Space Travelers&apos; Hub</h1></span>
          <div className={styles.links}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => (
                <li key={link.to} className="nav-item">
                  <NavLink
                    exact="false"
                    to={link.to}
                    className="nav-link"
                    activeClassName="active"
                  >
                    {link.text}
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
