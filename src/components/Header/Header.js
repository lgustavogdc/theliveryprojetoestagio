import React, { useState } from 'react';
import './Header.css';
import Logo2 from './../../assets/logo2.png';
import Menu from './../Menu/Menu'
import PlanoDeFundo from './../PlanoDeFundo/PlanoDeFundo';
import MenuBotao from './../Menu/MenuBotao';

const Navbar = props => {
    const [isMenuAberto, setIsMenuAberto] = useState(false);

    return (
        <header className="navbar">
            <nav className="navbar-navegacao">
                <div><img src={Logo2} alt="the-livery-logo" className="logo_thelivery" /></div>
                <div className="navbar-div">
                    <ul className="navbar-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Reportar</a></li>
                        <li><a href="/">Ajuda</a></li>
                        <li><a href="/">Contato</a></li>
                    </ul>
                </div>
                <div className="botao-menu">
                    <MenuBotao click={() => setIsMenuAberto(!isMenuAberto)} />
                </div>
            </nav>
            {isMenuAberto && <Menu click={() => setIsMenuAberto(!isMenuAberto)} />}
            {isMenuAberto && <PlanoDeFundo />}
        </header>

    );
};

export default Navbar; 
