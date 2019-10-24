import React from 'react'
import logo from '../../assets/logo.png'

import { FaUserCircle } from 'react-icons/fa';

import './style.css'

function Header() {
  return (
    <header>
      <a href="#">
        <img src="" />
      </a>
      <div className="perfil">
        <span>Meu Perfil</span>
        <FaUserCircle />
      </div>
    </header>
  )
}

export default Header
