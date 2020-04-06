import React from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Ilustration1 from './../../assets/ilustracao.svg';

export default () => (
    <main className="guide-main">
        <div className="main-text">
            <h1>Nós valorizamos seu <span>dinheiro</span>!</h1>
            <h2>Peça no <span>TheLivery</span> e receba dinheiro de volta.</h2>
            <p>Lorem <span>ipsum</span> dolor,
            sit amet consectetur adipisicing elit.
            Alias ipsa illum at
            illo excepturi ullam totam quas.</p>
            <div className="btn-container">
                <a href="/" className="btn-cheio">Quero economizar!</a>
                <a href="#amigo" className="btn-vazio">Saiba Mais!</a>
            </div>
        </div>
        <div className="ilustration-div">
            <img src={Ilustration1} alt="Ilustracao de dois homens em acordo" className="main-img" />
        </div>
        <div className="proxima-seção">
            <a href='#amigo'><FontAwesomeIcon icon={faChevronDown} /></a>
        </div>
    </main>

);