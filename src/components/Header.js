import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header id='header'>
        <div className='center'>
          {/* LOGO */}
          <div id='logo'>
            <img src={logo} alt='' className='app-logo' alt='Logotipo' />
            <span id='brand'>
              <strong>React</strong>
            </span>
          </div>
          {/*  MENU  */}
          <nav id='menu'>
            <ul>
              <li>
                <NavLink to='/home' activeClassName='active'>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to='/blog' activeClassName='active'>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to='/formulario' activeClassName='active'>
                  Formulario
                </NavLink>
              </li>
              <li>
                <NavLink to='/peliculas' activeClassName='active'>
                  Peliculas
                </NavLink>
              </li>
              <li>
                <NavLink to='/pruebas/Damian' activeClassName='active'>
                  Página
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className='clearfix'></div>
        </div>
      </header>
    );
  }
}

export default Header;
