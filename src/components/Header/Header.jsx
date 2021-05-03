import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const {user, name} = useSelector(state => state)

    return (
        <header>
            <div className="header">
                <div className="header-nav">
                    <Link to="/" className="header-link">
                        <img className="header-logo" src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" alt="logo"/>
                    </Link>
                </div>
                <div className="header-nav">
                    <a href="/#" className="header-link">Категории</a>
                </div>
                <div className="header-nav-flex">
                    <form className="header-form">
                        <button className="header-btn search" type="sumbit">
                            <i className="far fa-search header-search"></i>
                        </button>
                        <input  className="header-input" 
                                type="text" 
                                name="search" 
                                placeholder="Ищите что угодно"
                                autoComplete="off"/>
                    </form>
                </div>
                {!user &&
                    <>
                        <div className="header-nav">
                            <a href="/#" className="header-link">Преподавайте на Udemy</a>
                        </div>
                        <div className="header-nav">
                            <Link to="/sign-in" className="header-btn sign-in">Войти</Link>
                            <Link to="/sign-up" className="header-btn sign-up">Регистрация</Link>
                        </div>
                    </>
                }
                {user && 
                    <>
                        <div className="header-nav">
                            <a href="/#" className="header-link">Преподаватель</a>
                        </div>
                        <div className="header-nav">
                            <a href="/#" className="header-link">Мое обучение</a>
                        </div>
                        <div className="header-nav">
                            <i className="far fa-heart header-icon"></i>
                        </div>
                        <div className="header-nav">
                            <i className="far fa-shopping-cart header-icon"></i>
                        </div>
                        <div className="header-nav">
                            <i className="far fa-bell header-icon"></i>
                        </div>
                        <div className="header-nav">
                            <div className="circle">
                                <Link to="/main">
                                    {name.substring(0,1).toUpperCase()}
                                </Link>
                            </div>
                        </div>
                    </>
                }
            </div>
        </header>
    )
}

export { Header }