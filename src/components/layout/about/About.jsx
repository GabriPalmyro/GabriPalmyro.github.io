import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './about.css'

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
              <small>Mais de 4 de Anos de Experiência com Desenvolvimento de Software</small>
            </article>
            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Empresas</h5>
              <small>Conhecimento em Software Houses, Startups e Bancos Digitais</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>Participação e criação em projetos que juntos, atingem grande parte da população nacional</small>
            </article>
          </div>
          <div className="about__infos">
            <p>
            Como Engenheiro de Software com mais de 4 anos de experiência, meu foco principal é com o framework Flutter, porém também tenho experiência de mais de um ano com desenvolvimento web com ReactJS e Next.js.
Possuo habilidades em banco de dados relacionais e não-relacionais, bem como em controle de versões com Git.
Tenho também conhecimento em criação de microserviços utilizando Nest.js e de algumas ferramentas AWS como: RDS, EC2 com Ubuntu, S3, Amplify com CI/CD.
            </p>
            <a href="#contact" className='btn btn-primary'>Vamos conversar?</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About