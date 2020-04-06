import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

const Menu = props => (
    <nav className="menu">
        <button className="close-button" onClick={props.click}>
            <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul>
            <li><a href="/"><FontAwesomeIcon icon={faHome} />Home</a></li>
            <li><a href="/"><FontAwesomeIcon icon={faBuilding} />Cidades</a></li>
            <li><a href="/"><FontAwesomeIcon icon={faHandsHelping} />Ajuda</a></li>
            <li><a href="/"><FontAwesomeIcon icon={faPhone} />Contato</a></li>
        </ul>
    </nav>

);
export default Menu;