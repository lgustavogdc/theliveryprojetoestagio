import React from 'react';
import './PromocaoCupom.css';

import Logo from './../../assets/logo.png';
import Cupom1 from './../../assets/760.jpg';
import Cupom2 from './../../assets/OANUZZ0.jpg';
import Cupom3 from './../../assets/5883.jpg';


export default () => (
    <section className="cupom-section">
        <h2>Ganhe <span>cupons de desconto</span> enquanto usa o aplicativo!</h2>
        <div className="cupom-row">
            <div className="cupom">
                <div className="cupom-logo">
                    <img src ={Logo} alt="logo-thelivery-vermelho" className="logo_thelivery"/>
                </div>
                <img src={Cupom1} alt = "imagem de pizza" className="cupom-imagem"/>
                <div className = "cupom-text">
                    <h3>20%- <span>PIZZA</span></h3>
                    <p className="cupom-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Fuga iure asperiores aliquid dolor totam optio! Tempore perferendis 
                        eos ullam saepe assumenda distinctio 
                        soluta repellendus dolore illum? At laudantium cum veritatis?</p>
                    <div className="cupom-codigo">
                        <p>Use o código da promoção: <span className ="promocao">YET129</span></p>
                        <p className="expira">Expira em: 10 de Abril, 2020</p>
                    </div>
                </div>
            </div>
            <div className="cupom">
                <div className="cupom-logo">
                    <img src ={Logo} alt="logo-thelivery-vermelho" className="logo_thelivery"/>
                </div>
                <img src={Cupom2} alt = "imagem de comida japonesa" className="cupom-imagem"/>
                <div className = "cupom-text">
                    <h3>20%- <span>SUSHI</span></h3>
                    <p className="cupom-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Fuga iure asperiores aliquid dolor totam optio! Tempore perferendis 
                        eos ullam saepe assumenda distinctio 
                        soluta repellendus dolore illum? At laudantium cum veritatis?</p>
                    <div className="cupom-codigo">
                        <p>Use o código da promoção: <span className ="promocao">ZOR111</span></p>
                        <p className="expira">Expira em: 10 de Abril, 2020</p>
                         </div>
                </div>
            </div>
            <div className="cupom">
                <div className="cupom-logo">
                    <img src ={Logo} alt="logo-thelivery-vermelho" className="logo_thelivery"/>
                </div>
                <img src={Cupom3} alt = "imagem de hamburguer" className="cupom-imagem last"/>
                <div className = "cupom-text">
                    <h3>15%- <span>HAMBÚRGUER</span></h3>
                    <p className="cupom-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Fuga iure asperiores aliquid dolor totam optio! Tempore perferendis 
                        eos ullam saepe assumenda distinctio 
                        soluta repellendus dolore illum? At laudantium cum veritatis?</p>
                        <div className="cupom-codigo">
                            <p>Use o código da promoção: <span className ="promocao">LDS197</span></p>
                            <p className="expira">Expira em: 10 de Abril, 2020</p>
                        </div>
                </div>
                
            </div>
        </div>
    </section>
    );