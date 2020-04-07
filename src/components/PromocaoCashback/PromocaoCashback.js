import React from 'react';
import './PromocaoCashback.css'

export default () => (
    <section className="cashback-section">
        <h2>A cada compra, <span>você</span> é recompensado!</h2>
        <div className="cashback-container">
            <div className="cashback-card" >
                <div className="card-background"></div>
                <div className="card-text">
                    <h3>Em cada compra, ganhe 20% do seu dinheiro de volta!</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe expedita facere
                    dolorum vitae a doloribus consequuntur vel maxime.
                    Veritatis id in possimus quod placeat, dicta quasi sunt libero iusto
                    quibusdam?</p>
                </div>
            </div>
            <div className="cashback-text" data-aos="fade-up">
                <h3>O que é cashback?</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Omnis quaerat, eligendi eveniet non aperiam
                repudiandae qui molestias animi? Velit vero labore dolorum quia nulla
                beatae tempore voluptatibus eligendi repudiandae. Omnis.</p>
            </div>
        </div>
    </section>
);