import logo from '../../assets/logo4less3.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import './Menu.css';

export function Menu() {
  const [isMenuOpen, setCaptureMenuOpen] = useState(false);

  const toggleMenu = () => {
    setCaptureMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setCaptureMenuOpen(false);
    }
  };

  return (
    <nav
      className={`container-menu ${isMenuOpen ? 'menu-open' : ''}`}
      aria-label="Menu de Navegação">
      <img className="logo" src={logo} alt="" />
      <div className="container-list-menu">
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="close-icon" />
          ) : (
            <FaBars className="menu-icon" />
          )}
        </div>

        <ul className={`list-menu ${isMenuOpen ? 'show' : ''}`}>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('servicos')}>Serviços</li>
          <li onClick={() => scrollToSection('contacts')}>Contato</li>
        </ul>
      </div>
    </nav>
  );
}
