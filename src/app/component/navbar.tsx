// components/Navbar.js
"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../css/nav.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Portfolio
        </Link>
        
        <div className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="#about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="#skills" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Skills
          </Link>
          <Link href="#projects" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
          <Link href="#contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>

        <div 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;