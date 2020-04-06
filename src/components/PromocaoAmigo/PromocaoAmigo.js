import React from 'react';
import './PromocaoAmigo.css';

import Ilustration2 from './../../assets/ilustracao_2.svg';

export default () => (
    <section id="amigo" className="amigo-section">
        <h2>Indique para um <span>amigo</span> e ganhe um Bônus!</h2>
        <div className="amigo-column">
            <div className="amigos-subtitle">
                <h3>Ganhe um desconto indicando o <span>TheLivery</span> para um amigo!</h3>
            </div>
            <div className="amigos-imagem" data-aos="fade-up">
                <img src={Ilustration2} alt="Ilustracao de dois amigos" className="amigos-ilustration" />
            </div>
            <div className="amigos-text">
                <p>Lorem ipsum dolor <span>sit amet</span>, consectetur adipisicing elit.
                    Quasi molestias libero culpa<span> dolorem que magnam!</span></p>
            </div>
        </div>
    </section>
);