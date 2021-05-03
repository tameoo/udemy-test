import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-upper">
                    <div className="footer-wrapper">
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="/#" className="footer-link">
                                    Udemy for Business
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="/#" className="footer-link">
                                    Преподавайте на Udemy
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="/#" className="footer-link">
                                    Скачать приложение</a>
                            </li>
                            <li className="footer-item">
                                <a href="/#" className="footer-link">
                                    О нас
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="/#" className="footer-link">
                                    Наши координаты
                                </a>
                            </li>
                        </ul>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="/#" className="footer-link">
                                    Карьера
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="/#" className="footer-link">
                                    Блог
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="/#" className="footer-link">
                                    Справка и поддержка
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="/#" className="footer-link">
                                    Партнер
                                </a>
                            </li>
                        </ul>
                        <ul className="footer-list">
                        <li className="footer-item">
                            <a href="/#" className="footer-link">
                                Условия использования
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href="/#" className="footer-link">
                                Политика конфиденциальности
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href="/#" className="footer-link">
                                Рекомендуемые курсы
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href="/#" className="footer-link">
                                Карта сайта
                            </a>
                        </li>
                    </ul>
                    </div>
                    <button className="footer-btn">
                        <i className="fal fa-globe footer-globe"></i>
                        <span>Русский</span>
                        <i className="far fa-chevron-up footer-arrow"></i>
                    </button>
                </div>
                <div className="footer-lower">
                    <a href="/#" className="header-link">
                        <img className="header-logo" src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" alt="logo"/>
                    </a>
                    <span>© 2021 Udemy, Inc.</span>
                </div>
            </div>
        </footer>
    )
}

export { Footer }