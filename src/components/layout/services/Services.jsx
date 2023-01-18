import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu ofereço?</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className='services'>
          <div className='services__head'>
            <h3>Desenvolvimento Web</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Criação de sistemas de e-commerce</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Criação de landing pages</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Estilização e designs responsivos</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Criação de dashboards e formulários</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Consumo de APIs</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB */}
        <article className='services'>
          <div className='services__head'>
            <h3>Desenvolvimento Mobile</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Mais de 4 anos de prática com desenvolvimento Mobile</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Atuando na área com soluções de problemas</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Integrações e consumo de APIs</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Uso de gerenciadores como: Provider, BLoC</p>
            </li>
          </ul>
        </article>
        {/* END OF MOBILE */}
        <article className='services'>
          <div className='services__head'>
            <h3>Desenvolvimento Backend</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Criação de sistemas rápidos e ágeis para o seu web ou app</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Integração com serviços de disparo de e-mail</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Integrações com sistemas de pagamentos</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Utilização dos melhores sistemas de SGDB</p>
            </li>
          </ul>
        </article>
        {/* END OF BACKEND */}
      </div>
    </section>
  )
}
export default Services