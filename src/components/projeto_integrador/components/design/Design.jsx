import React from 'react';
import './design.css';

import docs from '../../../../assets/docs.png';
import drive from '../../../../assets/drive.png';
import landingpage from '../../../../assets/landingpage.png';
import landingpage2 from '../../../../assets/landingpage_2.png';
import overleaf from '../../../../assets/overleaf.png';

function Design() {
    return (
        <section id='design'>
            <h5>Design MVP</h5>
            <h2>Portfólio</h2>
            <div className="container design__container">
                <article className='design__item'>
                    <div className="design__item-image">
                        <img src={landingpage2} alt="landing_page_site" />
                    </div>
                    <h3>Landing Page</h3>
                    <div className="design__item-cta">
                        <a href="https://ownquest.games" className='btn btn-primary' target='_blank'>Acessar Site</a>
                    </div>
                </article>
                <article className='design__item'>
                    <div className="design__item-image">
                        <img src={landingpage} alt="landing_page_design" />
                    </div>
                    <h3>Design Web App Figma</h3>
                    <div className="design__item-cta">
                        <a href="https://www.figma.com/file/MfhubqfFR8MRDoBxms7M0j/Projeto-Integrador-I?node-id=0%3A1" className='btn btn-primary' target='_blank'>Figma</a>
                    </div>
                </article>
                <article className='design__item'>
                    <div className="design__item-image">
                        <img src={docs} alt="landing_page_design" />
                    </div>
                    <h3>Requisitos do usuário</h3>
                    <div className="design__item-cta">
                        <a href="https://docs.google.com/document/d/1K_wYETpz-ocyxTsuLPuPiBdGYedoLw53/edit?usp=sharing&ouid=100309646159964697143&rtpof=true&sd=true" className='btn btn-primary' target='_blank'>Docs</a>
                    </div>
                </article>
                <article className='design__item'>
                    <div className="design__item-image">
                        <img src={overleaf} alt="landing_page_design" />
                    </div>
                    <h3>Documento Overleaf</h3>
                    <div className="design__item-cta">
                        <a href="https://www.overleaf.com/project/632b52e0edf94895bbd224a0" className='btn btn-primary' target='_blank'>Acessar Projeto</a>
                    </div>
                </article>
                <article className='design__item'>
                    <div className="design__item-image">
                        <img src={drive} alt="drive_ownquest" />
                    </div>
                    <h3>Drive com diagramas e arquivos</h3>
                    <div className="design__item-cta">
                        <a href="https://drive.google.com/drive/folders/12g8SQvA0ChPmcRs1cJO76lI6mC6tdzn4?usp=share_link" className='btn btn-primary' target='_blank'>Acessar Drive</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Design