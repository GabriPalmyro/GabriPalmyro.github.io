import React from 'react';
import './portfolio.css';

import CHESSGAME from '../../../assets/chessgame.jpeg';
import EXPANSAO from '../../../assets/expansao.png';
import FIEMG from '../../../assets/fiemg.png';
import NETFLIXCLONE from '../../../assets/netflixclone.gif';
import QCUPWEBSITE from '../../../assets/qcupwebsite.png';
import TREINOFACIL from '../../../assets/treino_facil.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus Trabalhos</h5>
      <h2>Portfólio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={TREINOFACIL} alt="treino-facil" />
          </div>
          <h3>Treino Fácil App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/GabriPalmyro/Treino_Facil" className='btn'>Github</a>
            <a href="https://play.google.com/store/apps/details?id=br.com.palmyro.treino_facil" className='btn btn-primary' target='_blank' rel="noreferrer">Download</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={QCUPWEBSITE} alt="treino-facil" />
          </div>
          <h3>QCUP Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/GabriPalmyro/QcupWebsite_React" className='btn'>Github</a>
            <a href="https://qcup2021.web.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Acessar</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={CHESSGAME} alt="treino-facil" />
          </div>
          <h3>Flutter Chess Game</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/GabriPalmyro/chess_flutter_game" className='btn'>Github</a>
            {/* <a href="https/qcup2021web.app" className='btn btn-primary' target='_blank'>Acessar</a> */}
          </div>
        </article>
        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={SEMAFORO} alt="treino-facil" />
          </div>
          <h3>Semáforo ESP App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/GabriPalmyro/SemaforoEsp_App" className='btn'>Github</a>
            {/* <a href="https/qcup2021web.app" className='btn btn-primary' target='_blank'>Acessar</a> */}
        {/* </div> */}
        {/* </article> */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={NETFLIXCLONE} alt="treino-facil" />
          </div>
          <h3>Netflix Clone App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/GabriPalmyro/netflix_clone_api_rest" className='btn'>Github</a>
            {/* <a href="https/qcup2021web.app" className='btn btn-primary' target='_blank'>Acessar</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={EXPANSAO} alt="expansao" />
          </div>
          <h3>Plataforma de e-commerce expansão</h3>
          <div className="portfolio__item-cta">
            <a href="https://expansao.vercel.app/" className='btn'>Acessar Site</a>
            {/* <a href="https/qcup2021web.app" className='btn btn-primary' target='_blank'>Acessar</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={FIEMG} alt="fiemg" />
          </div>
          <h3>Plataforma de questionários SESI</h3>
          <div className="portfolio__item-cta">
            <a href="https://webqv.com.br/mapa-bem-estar/" className='btn'>Acessar Site</a>
            {/* <a href="https/qcup2021web.app" className='btn btn-primary' target='_blank'>Acessar</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio