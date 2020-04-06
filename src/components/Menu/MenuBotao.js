import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './MenuBotao.css';


const menuBotao = props => (
    <button className="toggle-button" onClick={props.click}>
        <FontAwesomeIcon icon={faBars} className="burguer" />
    </button>
);

export default menuBotao;