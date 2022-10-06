import React from 'react'
import './header.css';

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h3>Projeto Integrador I</h3>
                <h1>Atividades Realizadas</h1>
                <h5 className='text-light'>Instituto Federal de São Paulo, Campûs Birigui</h5>
            </div>
        </header>)
}

export default Header