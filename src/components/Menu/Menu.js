import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

const Menu = props => (
    <nav className="menu">
        <button className="toggle-button" onClick={props.click}>
            <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Reportar</a></li>
            <li><a href="/">Ajuda</a></li>
            <li><a href="/">Contato</a></li>
        </ul>
    </nav>

);
export default Menu;