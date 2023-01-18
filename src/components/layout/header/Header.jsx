import React from 'react'
import CTA from './CTA'
import './header.css'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, meu nome é</h5>
        <h1>Gabriel Palmyro</h1>
        <h5 className='text-light'>Desenvolvedor Front-end Pleno</h5>
        <a href="#contact" className='scroll__down'>Role para Baixo</a>
        <CTA />
        <Socials />

        {/* <div className="me">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME2} alt="About" />
            </div>
          </div>
        </div> */}

      </div>
    </header>
  )
}

export default Header