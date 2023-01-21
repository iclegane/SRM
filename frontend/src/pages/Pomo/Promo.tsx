import React from "react";
import './index.scss';

const Promo: React.FC = () => {

    return (
        <div className={'page page--promo'}>
            <header className="header">
                <div className="navbar navbar--open">
                    <div className="navbar__wrapper">
                        <a href="#" className="logo">
                            <img src={require('../../../static/icons/logo--white.svg')} alt=""/>
                        </a>
                        <div className="navbar__content">
                            <div className="menu navbar__menu">
                            <div className="menu__list navbar__menu-list">
                                <a href="#" className="menu__item navbar__menu-item">Product</a>
                                <a href="#" className="menu__item navbar__menu-item">Features</a>
                                <a href="#" className="menu__item navbar__menu-item">Marketplace</a>
                                <a href="#" className="menu__item navbar__menu-item">Company</a>
                            </div>
                        </div>
                            <button className="button-outline button-outline--medium navbar__button">Sign In</button>
                        </div>
                        <button className="navbar__burger"></button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Promo;