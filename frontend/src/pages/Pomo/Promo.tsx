import React from "react";
import './index.scss';

const Promo: React.FC = () => {

    return (
        <div className={'page page--promo'}>
            <section className="section cta-6">
                <div className="section__wrapper">
                    <div className="cta-6__container">
                        <div className="cta-6__image-block">
                            <img src={require('../../../static/images/Promo/cta-6.png')} alt=""/>
                        </div>
                        <div className="cta-6__info-block">
                            <div className="cta-6__subtitle overline overline--indigo overline--lg">Award winning support</div>
                            <div className="cta-6__title h2">We’re here to help</div>
                            <div className="cta-6__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                            <button className="button button--main button--large cta-6__button">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section--indigo cta-2">
                <div className="section__wrapper">
                    <div className="cta-2__container">
                        <div className="cta-2__info-block">
                            <div className="cta-2__title h2">Ready to dive in?
                                Start your free trial today.</div>
                            <div className="cta-2__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit.</div>
                            <button className="cta-2__button button button--main button--large">Sign up for free</button>
                        </div>
                        <div className="cta-2__image-block">
                            <img src={require('../../../static/images/Promo/cta-2.png')} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section feature-05">
                <div className="section__wrapper">
                    <div className="feature-05__container">
                        <div className="feature-05__info-block">
                            <div className="feature-05__section">
                                <div className="feature-05__subtitle overline overline--lg overline--indigo">Designed for developers</div>
                                <div className="feature-05__title h3">The world’s most powerful and easy-to use APIs</div>
                                <div className="feature-05__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit lorem ipsum dolor sit amet molit deserunt.</div>
                                <button className="feature-05__button button button--main button--medium">Read the docs</button>
                            </div>
                            <div className="feature-05__section">
                                <div className="feature-05__card-list">
                                    <div className="card">
                                        <div className="card__wrapper">
                                            <div className="card__icon">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 21C4 20.4477 4.44772 20 5 20H19C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21Z" fill="#90ECF4"/>
                                                    <path d="M13.7088 2.8772C14.8803 1.70564 16.7798 1.70565 17.9514 2.87722L19.123 4.04879C20.2945 5.22037 20.2945 7.11987 19.1229 8.29144L18.7072 8.70716L13.293 3.29295L13.7088 2.8772Z" fill="#444BD3"/>
                                                    <path d="M5.79703 10.797C5.65979 10.9607 5.55876 11.1522 5.50128 11.359L4.04389 16.6018C3.81466 17.4264 4.57364 18.1854 5.39831 17.9562L10.6411 16.4988C10.8479 16.4413 11.0394 16.3403 11.2031 16.203L5.79703 10.797Z" fill="#444BD3"/>
                                                    <path d="M18.7071 8.70716L13.2928 3.29295L5.88567 10.7C5.85459 10.7311 5.82498 10.7635 5.79688 10.797L11.2029 16.203C11.2365 16.1749 11.2688 16.1453 11.2999 16.1143L18.7071 8.70716Z" fill="#90ECF4"/>
                                                </svg>
                                            </div>
                                            <div className="card__title h6">Tools for every stack</div>
                                            <div className="card__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</div>
                                            <button className="card__button button button--text button--small">See more</button>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card__wrapper">
                                            <div className="card__icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.5681 3C15.3157 2.99997 15.0699 2.99994 14.8618 3.01695C14.6332 3.03563 14.3634 3.07969 14.092 3.21799C13.7157 3.40974 13.4097 3.7157 13.218 4.09202C13.0797 4.36345 13.0356 4.63318 13.017 4.86178C12.9999 5.06993 13 5.31572 13 5.56811V8.4319C13 8.68429 12.9999 8.93008 13.017 9.13824C13.0356 9.36683 13.0797 9.63656 13.218 9.90799C13.4097 10.2843 13.7157 10.5903 14.092 10.782C14.3634 10.9203 14.6332 10.9644 14.8618 10.9831C15.0699 11.0001 15.3157 11 15.5681 11H18.4319C18.6843 11 18.9301 11.0001 19.1382 10.9831C19.3668 10.9644 19.6366 10.9203 19.908 10.782C20.2843 10.5903 20.5903 10.2843 20.782 9.90799C20.9203 9.63656 20.9644 9.36683 20.9831 9.13824C21.0001 8.93008 21 8.68429 21 8.4319V5.56811C21 5.31572 21.0001 5.06993 20.9831 4.86178C20.9644 4.63318 20.9203 4.36345 20.782 4.09202C20.5903 3.7157 20.2843 3.40974 19.908 3.21799C19.6366 3.07969 19.3668 3.03563 19.1382 3.01695C18.9301 2.99994 18.6843 2.99997 18.4319 3L15.5681 3Z" fill="#90ECF4"/>
                                                    <path d="M5.56811 13C5.31572 13 5.06993 12.9999 4.86178 13.017C4.63318 13.0356 4.36345 13.0797 4.09202 13.218C3.7157 13.4097 3.40974 13.7157 3.21799 14.092C3.07969 14.3634 3.03563 14.6332 3.01695 14.8618C2.99994 15.0699 2.99997 15.3157 3 15.5681L3 18.4319C2.99997 18.6843 2.99994 18.9301 3.01695 19.1382C3.03563 19.3668 3.07969 19.6366 3.21799 19.908C3.40974 20.2843 3.7157 20.5903 4.09202 20.782C4.36345 20.9203 4.63318 20.9644 4.86178 20.9831C5.06993 21.0001 5.31572 21 5.56811 21H8.4319C8.68429 21 8.93008 21.0001 9.13824 20.9831C9.36683 20.9644 9.63656 20.9203 9.90799 20.782C10.2843 20.5903 10.5903 20.2843 10.782 19.908C10.9203 19.6366 10.9644 19.3668 10.9831 19.1382C11.0001 18.9301 11 18.6843 11 18.4319V15.5681C11 15.3157 11.0001 15.0699 10.9831 14.8618C10.9644 14.6332 10.9203 14.3634 10.782 14.092C10.5903 13.7157 10.2843 13.4097 9.90799 13.218C9.63656 13.0797 9.36683 13.0356 9.13824 13.017C8.93008 12.9999 8.68429 13 8.4319 13H5.56811Z" fill="#90ECF4"/>
                                                    <path d="M15.5681 13C15.3157 13 15.0699 12.9999 14.8618 13.017C14.6332 13.0356 14.3634 13.0797 14.092 13.218C13.7157 13.4097 13.4097 13.7157 13.218 14.092C13.0797 14.3634 13.0356 14.6332 13.017 14.8618C12.9999 15.0699 13 15.3157 13 15.5681V18.4319C13 18.6843 12.9999 18.9301 13.017 19.1382C13.0356 19.3668 13.0797 19.6366 13.218 19.908C13.4097 20.2843 13.7157 20.5903 14.092 20.782C14.3634 20.9203 14.6332 20.9644 14.8618 20.9831C15.0699 21.0001 15.3157 21 15.5681 21H18.4319C18.6843 21 18.9301 21.0001 19.1382 20.9831C19.3668 20.9644 19.6366 20.9203 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C20.9203 19.6366 20.9644 19.3668 20.9831 19.1382C21.0001 18.9301 21 18.6843 21 18.4319V15.5681C21 15.3157 21.0001 15.0699 20.9831 14.8618C20.9644 14.6332 20.9203 14.3634 20.782 14.092C20.5903 13.7157 20.2843 13.4097 19.908 13.218C19.6366 13.0797 19.3668 13.0356 19.1382 13.017C18.9301 12.9999 18.6843 13 18.4319 13H15.5681Z" fill="#90ECF4"/>
                                                    <path d="M5.56811 3C5.31573 2.99997 5.06993 2.99994 4.86178 3.01695C4.63318 3.03563 4.36345 3.07969 4.09202 3.21799C3.7157 3.40974 3.40974 3.7157 3.21799 4.09202C3.07969 4.36345 3.03563 4.63318 3.01695 4.86178C2.99994 5.06993 2.99997 5.31572 3 5.56809L3 8.4319C2.99997 8.68428 2.99994 8.93008 3.01695 9.13824C3.03563 9.36683 3.07969 9.63656 3.21799 9.90799C3.40974 10.2843 3.7157 10.5903 4.09202 10.782C4.36345 10.9203 4.63318 10.9644 4.86178 10.9831C5.06992 11.0001 5.3157 11 5.56807 11H8.4319C8.68427 11 8.93009 11.0001 9.13824 10.9831C9.36683 10.9644 9.63656 10.9203 9.90799 10.782C10.2843 10.5903 10.5903 10.2843 10.782 9.90799C10.9203 9.63656 10.9644 9.36683 10.9831 9.13824C11.0001 8.93009 11 8.68431 11 8.43194V5.56811C11 5.31574 11.0001 5.06992 10.9831 4.86178C10.9644 4.63318 10.9203 4.36345 10.782 4.09202C10.5903 3.7157 10.2843 3.40974 9.90799 3.21799C9.63656 3.07969 9.36683 3.03563 9.13824 3.01695C8.93008 2.99994 8.68429 2.99997 8.43192 3L5.56811 3Z" fill="#444BD3"/>
                                                </svg>
                                            </div>
                                            <div className="card__title h6">Prebuilt integrations</div>
                                            <div className="card__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</div>
                                            <button className="card__button button button--text button--small">Explore partners</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-05__image-block">

                            <div className="object-1">
                                <div className="object-1__body">
                                    <div className="object-1__main-image"></div>
                                    <div className="object-1__shadow"></div>
                                </div>
                                <div className="object-1__charts-image-container">
                                    <div className="object-1__charts-image"></div>
                                    <div className="object-1__charts-image"></div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Promo;