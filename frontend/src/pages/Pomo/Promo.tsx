import React from "react";
import './index.scss';

const Promo: React.FC = () => {

    let themeToggle = () => {
        const attrName = 'data-theme-style';
        const values = ['light-theme', 'dark-theme'];

        const html = document.querySelectorAll('html['+ attrName +']')[0];
        const currentValue = html.getAttribute(attrName);

        const nextValue = values.filter((el) => {
            return el !== currentValue;
        })[0];

        html.setAttribute(attrName, nextValue);
    }

    return (
        <div className={'page page--promo'}>
            <header className="header header--blue-gradient">
                <div className="navbar">
                    <div className="navbar__wrapper">
                        <div className="logo">
                            <a href="#" className="logo__link">
                                <img className="logo__img" src={require('../../../static/icons/logo--white.svg')} alt="logo"/>
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
                            <button className="button-main button-main--medium" onClick={themeToggle}>Sign Up</button>
                            <button className="button-outline button-outline--medium">Sign In</button>
                        </div>
                    </div>
                </div>
                <div className="header__container">
                    <div className="header__main-text">
                        <div className="banner">
                            <div className="display_2 banner__title">Build Better Products</div>
                            <div className="banner__description">Powerful, self-serve product analytics to help you convert, engage, and retain more users.</div>
                        </div>

                        <div className="buttons-group header__buttons-container">
                            <button className="button-main button-main--large">Sign Up</button>
                            <button className="button-outline button-outline--large">Sign In</button>
                        </div>
                    </div>
                    <div className="header__image-concept">
                        <img src={require('../../../static/images/Promo/2.png')} alt="srm-preview"/>
                    </div>
                </div>
            </header>

            <section className="section features-block">
                <div className="section__wrapper">
                    <div className="features-block__heading">
                        <div className="overline overline--lg overline--indigo features-block__auxiliary-text">Why dlex</div>
                        <div className="h3">Creativity is nothing but the way to solve new problems.</div>
                    </div>
                    <div className="features-block__card-list">
                        <div className="feature-card">
                            <div className="feature-card__wrapper">
                                <div className="feature-card__head">
                                    <div className="feature-card__icon">
                                        <img src={require('../../../static/icons/User Interface/Bank Cards.svg')} alt=""/>
                                    </div>
                                    <div className="feature-card__title h6">UI Design</div>
                                </div>
                                <div className="feature-card__body">
                                    <div className="feature-card__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card__wrapper">
                                <div className="feature-card__head">
                                    <div className="feature-card__icon">
                                        <img src={require('../../../static/icons/User Interface/Bank Cards.svg')} alt=""/>
                                    </div>
                                    <div className="feature-card__title h6">Customer support</div>
                                </div>
                                <div className="feature-card__body">
                                    <div className="feature-card__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card__wrapper">
                                <div className="feature-card__head">
                                    <div className="feature-card__icon">
                                        <img src={require('../../../static/icons/User Interface/Bank Cards.svg')} alt=""/>
                                    </div>
                                    <div className="feature-card__title h6">Fast delivery</div>
                                </div>
                                <div className="feature-card__body">
                                    <div className="feature-card__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card__wrapper">
                                <div className="feature-card__head">
                                    <div className="feature-card__icon">
                                        <img src={require('../../../static/icons/User Interface/Bank Cards.svg')} alt=""/>
                                    </div>
                                    <div className="feature-card__title h6">UX & Research</div>
                                </div>
                                <div className="feature-card__body">
                                    <div className="feature-card__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section--indigo cta">
                <div className="section__wrapper">
                    <div className="cta__container">
                        <div className="h1 cta__title">
                        Boost your productivity.
                        <br/>
                        Start using workflow today.
                    </div>
                        <div className="cta__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit.</div>
                        <button className="cta__button button-main button-main--large">Sign up for free</button>
                    </div>
                </div>
            </section>

            <section className="section technology-block">
                <div className="section__wrapper">
                    <div className="technology-block__head">
                        <div className="technology-block__info">
                            <div className="overline overline--lg overline--indigo technology-block__auxiliary-text">Customer Spotlight</div>
                            <div className="h3 technology-block__title">DocuSign enables customer to succeed with Dlex</div>
                            <div className="technology-block__text">DocuSign uses Dlex to track key metrics to improve customer experience, resulting in more conversions, onboarding completions, and paid upgrades.</div>
                            <button className="button-main button-main--large technology-block__button">Read full story</button>
                        </div>
                        <div className="technology-block__image-container"></div>
                    </div>
                    <hr/>
                    <div className="technology-block__body">
                        <div className="h4 technology-block__sub-title">Trusted by over 39,000 forward-thinking companies</div>
                        <div className="technology-block__list">
                            <img src={require('../../../static/images/Promo/4.png')}/>
                            <img src={require('../../../static/images/Promo/4.png')}/>
                            <img src={require('../../../static/images/Promo/4.png')}/>
                            <img src={require('../../../static/images/Promo/4.png')}/>
                            <img src={require('../../../static/images/Promo/4.png')}/>
                            <img src={require('../../../static/images/Promo/4.png')}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section--indigo features-mobile">
                <div className="section__wrapper">
                    <div className="features-mobile__container">
                        <div className='features-mobile__content'>
                            <div className="h2 features-mobile__title">Dlex Startup Mobile Apps & Completed design system</div>
                            <div>A complete design system with 70 pre-built screens for mobile apps to enable you to kick-off your mobile app design.</div>
                            <button className="button-main button-main--large features-mobile__button">Get it Now</button>
                        </div>
                        <div className="features-mobile__image"></div>
                    </div>
                </div>
            </section>

            <footer className='footer'>
                <div className="footer__wrapper">
                    <div className="footer__copyright">© 2023 Dlex, Inc. All rights reserved</div>
                    <div className="footer__media-list">
                        <a className='footer__media-item' href="#"><img src={require('../../../static/icons/Social Icons/logo-github.svg')} alt=""/></a>
                        <a className='footer__media-item' href="#"><img src={require('../../../static/icons/Social Icons/logo-github.svg')} alt=""/></a>
                        <a className='footer__media-item' href="#"><img src={require('../../../static/icons/Social Icons/logo-github.svg')} alt=""/></a>
                        <a className='footer__media-item' href="#"><img src={require('../../../static/icons/Social Icons/logo-github.svg')} alt=""/></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Promo;