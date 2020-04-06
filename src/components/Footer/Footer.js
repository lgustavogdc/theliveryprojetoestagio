import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


export default () => (
  <footer>
    <div className="nav">
      <ul className="footer-nav">
        <li><a href="/">Sobre nós</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">iOS App</a></li>
        <li><a href="/">Android App</a></li>
      </ul>
    </div>
    <div className="footer-text">
      <p>TheLivery 2018 © A melhor forma de pedir comida online. Desenvolvido por Luís Gustavo.</p>
    </div>
    <div className="social">
      <ul className="social-links">
        <li><a href="/">
          <FontAwesomeIcon icon={faFacebook} className="facebook" />
        </a></li>
        <li><a href="/">
          <FontAwesomeIcon icon={faTwitter} className="twitter" />
        </a></li>
        <li><a href="/">
          <FontAwesomeIcon icon={faInstagram} className="instagram" />
        </a></li>
      </ul>
    </div>
  </footer>

);