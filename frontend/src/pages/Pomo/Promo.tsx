import React from "react";
import './../../styles/index.scss';
import './index.scss';

// @ts-ignore
import logoSvg from '../../../static/icons/logo--white.svg';
// @ts-ignore
import srmPreview from '../../../static/images/Promo/2.png';

const Promo: React.FC = () => {
    return (
        <div className={'page page--promo'}>
            <header className="header">
                <div className="header__container">
                    <div className="navbar">
                        <div className="logo">
                            <a href="#" className="logo__link">
                                <img className="logo__img" src={logoSvg} alt="logo"/>
                            </a>
                        </div>
                        <div className="menu navbar__menu">
                            <div className="menu__list">
                                <a href="#" className="menu__item">Product</a>
                                <a href="#" className="menu__item">Features</a>
                                <a href="#" className="menu__item">Marketplace</a>
                                <a href="#" className="menu__item">Company</a>
                            </div>
                        </div>
                        <div className="buttons-group navbar__buttons">
                            <div className="button-main button-main--medium">Sign Up</div>
                            <div className="button-outline button-outline--medium">Sign In</div>
                        </div>
                    </div>
                    <div className="header__main-text">
                        <div className="banner">
                            <div className="display_2 banner__title">Build Better Products</div>
                            <div className="banner__description">Powerful, self-serve product analytics to help you convert, engage, and retain more users.</div>
                        </div>

                        <div className="buttons-group header__buttons-container">
                            <div className="button-main button-main--large">Sign Up</div>
                            <div className="button-outline button-outline--large">Sign In</div>
                        </div>
                    </div>
                    <div className="header__image-concept">
                        <img src={srmPreview} alt="srm-preview"/>
                    </div>
                </div>
                <div className="header__background-image"></div>
            </header>
        </div>
    )
}

export default Promo;