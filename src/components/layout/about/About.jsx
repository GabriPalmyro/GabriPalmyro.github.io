import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Quem eu sou?</h5>
      <h2>Sobre</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="About" />
          </div>
        </div> */}
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiências</h5>
              <small>3+ Anos de Estudo</small>
            </article>
            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Clientes</h5>
              <small>5+ clientes</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>10+ Projetos Completoss</small>
            </article>
          </div>
          <div className="about__infos">
            <p>
              Cursando Engenharia de Computação no Instituto Federal de São Paulo, com previsão de graduação em 2023.
              <br />
              Entusiasta das melhores tecnologias de desenvolvimento web & mobile.
              Apaixonado por aprender e desenvolver produtos e serviços que façam diferença na vida das pessoas.
              <br />
              <br />
              Experiência de mais de 2 anos com desenvolvimento mobile, web e windows utilizando Flutter.
              Sou criador do "Treino Fácil, aplicativo de planilhas de treino personalizadas e de controle remoto para Personal Trainer. Hoje com mais de 3500 usuário cadastrados e 150 usuários por dia.
              Conhecimento de todo Kit Firebase e integração com apps Mobile.
            </p>
            <a href="#contact" className='btn btn-primary'>Vamos conversar?</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About