import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, meu nome é</h5>
        <h1>Gabriel Palmyro</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        <Socials/>
        
        <div className="me">
          <img src={ME} alt="Myself" />
        </div>

        <a href="#contact" className='scroll__down'>Role para Baixo</a>
      </div>
    </header>
  )
}

export default Header