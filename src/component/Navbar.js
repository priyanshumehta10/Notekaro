import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>NoteKaro</h1>
      </div>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}><a href="#home">Home</a></li>
        <li className={styles.navItem}><a href="#about">About</a></li>
        <li className={styles.navItem}><a href="#services">Services</a></li>
        <li className={styles.navItem}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
