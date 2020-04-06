import React from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import useModal from 'use-react-modal';

import Ilustration1 from './../../assets/ilustracao.svg';
import Ilustration3 from './../../assets/ilustracao_3.svg';
import downloadButtonIOS from './../../assets/download-on-the-app-store-apple.svg';
import downloadButtonAndroid from './../../assets/google-play-badge.svg';

function Main() {
    const { isOpen, openModal, closeModal, Modal } = useModal({
        background: 'rgba(0, 0, 0, 0.5)',
        closeOnOutsideClick: true,
        closeOnEsc: true
    });

    return (
        <main className="guide-main">
            <div className="main-text ">
                <h1>Nós valorizamos seu <span>dinheiro</span>!</h1>
                <h2>Peça no <span>TheLivery</span> e receba dinheiro de volta.</h2>
                <p>Lorem <span>ipsum</span> dolor,
            sit amet consectetur adipisicing elit.
            Alias ipsa illum at
            illo excepturi ullam totam quas.</p>
                <div className="btn-container">
                    <button className="btn-cheio" onClick={openModal}>Quero economizar!</button>
                    {isOpen && (
                        <Modal className="modal-box">
                            <button className="close-button" onClick={closeModal}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                            <div className="phone-icon-div"><FontAwesomeIcon icon={faMobileAlt} className="phone-icon" /></div>
                            <div className="modal-text">
                                <h2>Baixe o <span>melhor</span> aplicativo de Delivery!</h2>
                                <p>Lorem <span>ipsum</span> dolor,
                                sit amet consectetur adipisicing elit.
                                <span> Alias ipsa illum at
                                illo</span> excepturi ullam totam quas.</p>
                            </div>
                            <div className="download-modal-container">
                                <a href="/"><img src={downloadButtonIOS} alt="Imagem de download no IOS" className="modal-download" /></a>
                                <a href="/"><img src={downloadButtonAndroid} alt="Imagem de download no Android" className="modal-download" /></a>
                            </div>
                            <div className="imagem-modal-container">
                                <img src={Ilustration3} alt="ilustração de pessoa proxima a um celular" className="modal-ilustration" />
                            </div>
                        </Modal>
                    )}
                    <a href="#amigo" className="btn-vazio">Saiba Mais!</a>
                </div>
            </div>
            <div className="ilustration-div" data-aos="fade-left">
                <img src={Ilustration1} alt="Ilustracao de dois homens em acordo" className="main-img" />
            </div>
            <div className="proxima-seção">
                <a href='#amigo'><FontAwesomeIcon icon={faChevronDown} /></a>
            </div>
        </main >
    );
}
export default Main;