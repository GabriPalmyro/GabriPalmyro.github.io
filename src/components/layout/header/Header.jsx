import React from 'react'
import ME from '../../../../src/assets/my-photo.png'
import CTA from './CTA'
import Socials from './Socials'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, meu nome é</h5>
        <h1>Gabriel Palmyro Martins</h1>
        <h5 className='text-light'>Software Engineer II | Engenheiro de Software II</h5>
        <a href="#contact" className='scroll__down'>Role para Baixo</a>
        <CTA />
        <Socials />

        <div className="me">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About" />
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header